var sub = 0;
var iva = 0;
var v; //venta
Template.carrito.onRendered(function(){
	//creanuevaVenta()
	v = new Venta();

	$('.modal-trigger').leanModal();
	$('select').material_select();

	sub = 0;
	iva = 0;
	$("#pagoTarjeta").hide();
	var detCarrito = Carrito.find({idUsuario:Session.get("idU")}).fetch();
	if(detCarrito.length!=0){
		for(var i=0; i<detCarrito.length; i++)
		{
			detCarrito[i].idProducto;
			detCarrito[i].unidades;
			var g =granos.find(detCarrito[i].idProducto,{_id:true,precioVenta:true}).fetch()[0];
			v.introducirGrano(detCarrito[i].idProducto,detCarrito[i].unidades,g.precioVenta);
			console.log("Entro");
		} 	
	}
});
Template.carrito.events({
	"click #btnAgregarDireccion":function(){
		$("#nuevaDireccion").show("slow");
	},
	"click #btnLimpiar":function(){
		Meteor.call("deleteCarrito",Session.get("idU"));
		location.reload(true);
	},
	"click #btnAceptarCompra":function(){
		$('#modal2').closeModal();
		var tCompra;
		var tPago;
		var esExportacion;

		esExportacion = !document.getElementById("rdoNacional").checked;


		if(document.getElementById("rdoDeposito").checked)
			tPago = "D";
		else
			tPago = "T";
		v.setUsuario(Session.get("idU"));
		v.setFecha(new Date());
		var cantidad = v.getTotal();
		v.realizarPago(tPago,cantidad);
		if(v.actualizaInventario()){
			v.setEsCompletado(true);
			Materialize.toast("Su compra ha sido realizada con éxito",2000,'rounded');		
		}
		else{
			Materialize.toast("No hay existencia los granos!",2000,'rounded');
			return;
		}
	},
	"change #direccionEnvio": function(){
		var idDireccion = document.getElementById("direccionEnvio").value;
		v.setDireccion(idDireccion);
	},
	"click #btnAceptarDireccion": function(){
		var dir = {
				clave: "",
				idUsuario: Session.get("idU"),
				nomConsig:$("#txtNombreConsignatario").val(),
				calle: $("#txtCalle").val(),
				numero: $("#txtNumero").val(),
				colonia:$("#txtColonia").val(),
				rfc: $("#txtRFC").val(),
				codigoPostal:$("#txtCp").val(),
				pais: $("#txtPais").val(),
				estado: $("#txtEstado").val(),
				ciudad: $("#txtCiudad").val(),
				telefono: $("#txtTelefono").val(),
				fiscal: false
			};
		Meteor.call("getSigConsecDirecciones", dir,function(error, direccion){
			
			Meteor.call("insertarDireccion",direccion,function(error){
				if(error)
					Materialize.toast(error.reason,2000,'rounded');
				else{
					Materialize.toast("Dirección registrada con éxito.",2000,'rounded');
					$("#txtNombreConsignatario").val("");
					$("#txtCalle").val("");
					$("#txtNumero").val("");
					$("#txtColonia").val("");
					$("#txtRFC").val("");
					$("#txtCp").val("");
					$("#txtPais").val("");
					$("#txtEstado").val("");
					$("#txtCiudad").val("");
					$("#txtTelefono").val("");
				}
			});
		});

},

});
Template.carrito.helpers({
	articulos:function(){
		return Carrito.find({idUsuario:Session.get("idU")});
	},
	opcionesDireccion:function(){
		return DireccionesUsu.find({idUsuario:Session.get("idU")});
		
	},
	subTot:function(){
		return Meteor.formato.moneda2(String(sub));
	},
	iva:function(){
		iva = sub * 0.16;
		return Meteor.formato.moneda2(String(iva.toFixed(2)));
	},
	total:function(){
		return Meteor.formato.moneda2(String(sub + iva));
	}
});
Template.articulo.helpers({
	pUnitario:function(){
		var precio = granos.find({_id:this.idProducto},{precioVenta:true}).fetch();
		Session.set("precio",precio[0].precioVenta);
		return Meteor.formato.moneda2(precio[0].precioVenta);
	},
	importeProd:function(){
		var totalprod = (parseFloat(Session.get("precio"))*parseFloat(this.unidades));
		sub = sub + totalprod;
		return Meteor.formato.moneda2(String(totalprod));
	},
	nombre: function(){
		var nombre = granos.find({_id:this.idProducto},{nombre:true}).fetch();
		return nombre[0].nombre;
	}
});
Template.articulo.events({
	"click #btnEliminarCar":function(){
		Meteor.call("deleteArtCarrito",this._id);
		location.reload(true);
	}
});