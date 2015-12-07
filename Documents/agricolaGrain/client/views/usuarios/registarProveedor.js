Template.registrarProveedor.events({
	"click #btnRegistrarProveedor": function(){
		var proveedor = {
			nombre: $("#txtNombreP").val(),
			apellido: $("#txtApellidoP").val(),
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
				Materialize.toast("proveedor registrado con éxito.",2000,'rounded');
			}
		});
	}
});