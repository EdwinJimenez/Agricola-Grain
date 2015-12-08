var sub = 0;
var iva = 0;
Template.carrito.onRendered(function(){
	$('.modal-trigger').leanModal();
	$('select').material_select();
	sub = 0;
	iva = 0;
	$("#pagoTarjeta").hide();
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
		console.log("evento");
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
			telefono: $("#txtTelefono").val(),
			fiscal: false
		}
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
	},
	"click #btnAceptarCompra":function(){
		var tCompra;
		var tPago;
		var idDireccion;

		if(document.getElementById("rdoNacional").checked)
			tCompra = "N";
		else
			tCompra = "E";

		if(document.getElementById("rdoDeposito").checked)
			tPago = "D";
		else
			tPago = "T";

		//Direccion de envio(ID)
		idDireccion = document.getElementById("direccionEnvio").value;
		//Detalle de la venta
		var dv = Carrito.find({idUsuario:Session.get("idU")}).fetch();
		for(var i=0; i<dv.length; i++)
		{
			dv[i].idProducto;
			dv[i].unidades;
		} 
		//Folios
		Meteor.call("obtenSigFolio","V",function(error,fVenta){
				if(error)
					Materialize.toast(error.reason,2000,'rounded');
				else{
					fVenta;
				}
		});
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
		return Meteor.formato.moneda2(String(iva.toFixed(2)));
	},
	total:function(){
		return Meteor.formato.moneda2(String(sub + iva));
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
		Meteor.call("deleteArtCarrito",this._id);
		location.reload(true);
	}
});