var sub = 0;
var iva = 0;
Template.carrito.onRendered(function(){
	$('.modal-trigger').leanModal();
	$('select').material_select();
	sub = 0;
	$("#pagoTarjeta").hide();
});
Template.carrito.events({
	"click #btnAgregarDireccion":function(){
		$("#nuevaDireccion").show("slow");
	},
	"click #btnLimpiar":function(){
		Meteor.call("deleteCarrito",Session.get("idU"));
	},
	"click #btnAceptarDireccion": function(){
		var direccion = {
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
			fiscal: false
		}
		Meteor.call("insertarDireccion",direccion);
	}
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
		return Meteor.formato.moneda2(String(iva));
	},
	total:function(){
		return sub + iva;
	}
});
Template.articulo.helpers({
	pUnitario:function(){
		var precio = Granos.find({_id:this.idProducto},{precioVenta:true}).fetch();
		Session.set("precio",precio[0].precioVenta);
		return Meteor.formato.moneda2(precio[0].precioVenta);
	},
	importeProd:function(){
		var totalprod = (parseFloat(Session.get("precio"))*parseFloat(this.unidades));
		sub = sub + totalprod;
		return Meteor.formato.moneda2(String(totalprod));
	},
	nombre: function(){
		var nombre = Granos.find({_id:this.idProducto},{nombre:true}).fetch();
		return nombre[0].nombre;
	}
});
Template.articulo.events({
	"click #btnEliminarCar":function(){
		Meteor.call("deleteArtCarrito",Session.get("idU"),this.idProducto);
	}
});