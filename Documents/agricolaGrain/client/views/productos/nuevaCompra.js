var c; // compra
Template.nuevaCompra.onRendered(function(){
	//crearnuevaCompra()
	c = new Compra();

	$('.collapsible').collapsible({
	      accordion : false
	    });
	$("#altaGrano").hide();
	$("#nuevaCompra").show("slow");
	var g;
	var detCompra = DetCompraAux.find({idUsuario:Session.get("idU")}).fetch();
	if(detCompra.length!=0){
		for(var i=0; i<detCompra.length; i++)
		{
			g =granos.find({nombre:detCompra[i].producto},{_id:true}).fetch();
			c.introducirGrano(g[0]._id, detCompra[i].unidades,detCompra[i].precio);
		} 	
	}
},
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  })
);

Template.nuevaCompra.helpers({
	opcionesTipo:function(){
		return Tipos.find({});
	},
	opcionesNombre:function(){
		return granos.find({},{nombre:true});
	},
	opcionesProveedor:function(){
		return Proveedores.find({},{nombre:true});
	},
	detallesCompra:function(){
		return DetCompraAux.find({idUsuario:Session.get("idU")});
	},
	total:function(){
		var a = DetCompraAux.find({idUsuario:Session.get("idU")}).fetch();
		var total = 0;
		if(a.length!=0){
			for(var i=0; i<a.length; i++){
				total = total + (a[i].precio * a[i].unidades);
			}
		}
		return Meteor.formato.moneda2(String(total));
	}
});

Template.nuevaCompra.events({
	"click #btnAgregarProducto":function(){
		var detCompra = {
			idUsuario:Session.get("idU"),
			producto:$("#selectNombre").val(),
			unidades:parseFloat($("#txtCantidad").val()),
			precio:parseFloat($("#txtPrecioCompra").val())
		}
		Meteor.call("insertarDetCompra",detCompra);
		var g =granos.find({nombre:detCompra.producto},{_id:true}).fetch();
		c.introducirGrano(g[0]._id, detCompra.unidades,detCompra.precio);
	
	},
	"click #btnRegistrarCompra":function(){
		var dc = DetCompraAux.find({idUsuario:Session.get("idU")}).fetch();
		if(dc.length!=0){
			var esImportacion;
			var tPago;
			var idProv;
			esImportacion = !document.getElementById("rdoNacional").checked;

			if(document.getElementById("rdoDeposito").checked)
				tPago = "D";
			else
				tPago = "TR";

			idProv = $("#selectProveedor").val();
			if(idProv==null || $("#dateFechaCompra").val()==""){
				Materialize.toast("Asegurece de seleccionar un proveedor y fecha, porfavor!",2000,'rounded');
				return;
			}
			c.setEsImportacion(esImportacion);
			c.introducirFormaPago(tPago);

			var cantidad = c.getTotal();
			c.pagoCompra(cantidad);

			if(c.actualizaInventario()){
				c.setEsCompletado(true);
				Materialize.toast("Compra de realizada con éxito!",2000,'rounded');		
			}
			else{
				Materialize.toast("No hay bodegas donde almacenar los granos!",2000,'rounded');
				return;
			}
			

		}else{
			Materialize.toast("No tiene productos para comprar!",2000,'rounded');
			return;
		}
	},
	"change #dateFechaCompra":function(){
		c.setFecha(new Date($("#dateFechaCompra").val()));
	},
	"change #selectProveedor":function(){
		c.setProveedor($("#selectProveedor").val());
	},
	"click #btnCancelarCompra":function(){
		Meteor.call("eliminarDetCompra",function(error){		
			if(error)
				Materialize.toast(error.reason,2000,'rounded');
			else{
				Materialize.toast("Detalle de compra cancelado con éxito.",2000,'rounded');
			}
		});
	}
});

Template.detCompra.events({
	"click #btnEditar":function(){
		var producto = document.getElementById("txtNom"+this.producto).value;
		var unidades = parseFloat(document.getElementById("txtCan"+this.producto).value);
		var precio = parseFloat(document.getElementById("txtPre"+this.producto).value);

		Meteor.call("updateDetCompra",producto,Session.get("idU"),unidades,precio);

		var g =granos.find({nombre:producto},{_id:true}).fetch()[0];
		var indexToRemove;
		c.detalle.some(function(dc,index,_detalle){
			if(dc.producto==g._id){
				indexToRemove = index;
				return true;
			}
		});
		c.detalle.splice(indexToRemove,1);
		c.introducirGrano(g._id, unidades,precio);
	},
	"click #btnEliminar":function(){

		var g =granos.find({nombre:this.producto},{_id:true}).fetch()[0];
		var indexToRemove;
		c.detalle.some(function(dc,index,_detalle){
			if(dc.producto==g._id){
				indexToRemove = index;
				return true;
			}
		});
		c.detalle.splice(indexToRemove,1);
		Meteor.call("deleteDetCompra",this._id);
	}
});

Template.detCompra.helpers({
	precioAux:function(){
		return this.precio;
	},
	importeDet:function(){
		return this.importe;
	}
});