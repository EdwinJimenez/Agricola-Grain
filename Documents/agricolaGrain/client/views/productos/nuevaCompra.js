Template.nuevaCompra.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
	$("#altaGrano").hide();
	$("#nuevaCompra").show("slow");
});

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
	}
	
});

Template.detCompra.events({
	"click #btnEditar":function(){
		var producto = document.getElementById("txtNom"+this.producto).value;
		var unidades = document.getElementById("txtCan"+this.producto).value;
		var precio = document.getElementById("txtPre"+this.producto).value;
		Meteor.call("updateDetCompra",producto,Session.get("idU"),unidades,precio);
	}
});