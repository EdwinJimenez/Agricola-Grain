Template.registrarProveedor.events({
	"click #btnRegistrarProveedor": function(){
		if(Meteor.validaciones.validarVacios(frmRegistrarProveedor)&&Meteor.validaciones.validarEmail(frmRegistrarProveedor)&&Meteor.validaciones.validarTelefono(frmRegistrarProveedor))
		{
		var proveedor = {
			nombre: $("#txtNombreP").val(),
			correo: $("#txtCorreoP").val(),
			telefono: $("#txtTelefonoP").val(),
			direccion: {
				calle: $("#txtCalleP").val(),
				numero: $("#txtNumeroP").val(),
				colonia: $("#txtColoniaP").val(),
				RFC: $("#txtRFCP").val(),
				pais: $("#txtPaisP").val(),
				estado: $("#txtEstadoP").val(),
				ciudad: $("#txtCiudadP").val()
			}
		}
		Meteor.call("insertProveedor",proveedor,function(error){
			if(error)
				Materialize.toast(error.reason,2000,'rounded');
			else{
				Materialize.toast("Proveedor registrado con éxito.",2000,'rounded');
				$("#txtNombreP").val("");
				$("#txtCorreoP").val(""),
				$("#txtTelefonoP").val(""),
				$("#txtCalleP").val(""),
				$("#txtNumeroP").val(""),
				$("#txtColoniaP").val(""),
				$("#txtRFCP").val(""),
				$("#txtPaisP").val(""),
				$("#txtEstadoP").val(""),
				$("#txtCiudadP").val("")
			}
		});
	}
	}
});