var sub = 0;
var iva = 0;
Template.nuevaCompra.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
	$("#altaGrano").hide();
	$("#nuevaCompra").show("slow");
	sub = 0;
	iva = 0;
	var detCompra = DetCompra.find({idUsuario:Session.get("idU")}).fetch();
	if(detCompra.length!=0){
		for(var i=0; i<detCompra.length; i++)
		{
			detCompra[i].producto;
			detCompra[i].unidades;
			console.log("Entro");
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
		return Granos.find({},{nombre:true});
	},
	opcionesProveedor:function(){
		return Proveedores.find({},{nombre:true});
	},
	detallesCompra:function(){
		return DetCompra.find({idUsuario:Session.get("idU")});
	},
	subTot:function(){
		return Meteor.formato.moneda2(String(sub));
	},
	iva:function(){
		iva = sub * 0.16;
		return Meteor.formato.moneda2(String(iva));
	},
	total:function(){
		return Meteor.formato.moneda2(String(sub + iva));
	}
});

Template.nuevaCompra.events({
	"click #btnAgregarProducto":function(){
		var detCompra = {
			idUsuario:Session.get("idU"),
			producto:$("#selectNombre").val(),
			unidades:$("#txtCantidad").val(),
			precio:$("#txtPrecioCompra").val()
		}
		Meteor.call("insertarDetCompra",detCompra);
	},
	"click #btnRegistrarCompra":function(){
		var dc = DetCompra.find({idUsuario:Session.get("idU")}).fetch();
		if(dc.length!=0){
			var tCompra;
			var tPago;
			var idProv;
			if(document.getElementById("rdoNacional").checked)
				tCompra = "N";
			else
				tCompra = "E";

			if(document.getElementById("rdoDeposito").checked)
				tPago = "D";
			else
				tPago = "TR";

			idProv = $("#selectProveedor").val();
			if(idProv==null || $("#dateFechaCompra").val()==""){
				Materialize.toast("Asegurece de seleccionar un proveedor y fecha, porfavor!",2000,'rounded');
				return;
			}
			var fecha = new Date($("#dateFechaCompra").val());
			
			console.log(fecha);
			for(var i=0; i<dc.length; i++)
			{
				dc[i].producto;
				dc[i].unidades;
				dc[i].precio;
			} 
		}else{
			Materialize.toast("No tiene productos para comprar!",2000,'rounded');
			return;
		}
	},
	"change #dateFechaCompra":function(){
		console.log(new Date($("#dateFechaCompra").val()));
	},
	"change #selectProveedor":function(){
		console.log($("#selectProveedor").val());
	}
});

Template.detCompra.events({
	"click #btnEditar":function(){
		var producto = document.getElementById("txtNom"+this.producto).value;
		var unidades = document.getElementById("txtCan"+this.producto).value;
		var precio = document.getElementById("txtPre"+this.producto).value;
		Meteor.call("updateDetCompra",producto,Session.get("idU"),unidades,precio);
	},
	"click #btnEliminar":function(){
		Meteor.call("deleteDetCompra",this._id);
	}
});

Template.detCompra.helpers({
	precioAux:function(){
		sub = sub + (parseFloat(this.precio) * parseFloat(this.unidades));
		return this.precio;
	}
});