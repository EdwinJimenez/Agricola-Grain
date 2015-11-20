Template.registrarEmpleado.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
});
Template.registrarEmpleado.events({
		"click #btnRegistrar": function(){
			if(Meteor.validaciones.validarVacios(frmRegistrarEmpleado)&&Meteor.validaciones.validarEmail(frmRegistrarEmpleado)&&Meteor.validaciones.validarTelefono(frmRegistrarEmpleado))
			{
				var usuario = {
					usuario: $("#txtUsuarioRU").val(),
					contraseña:CryptoJS.MD5($("#txtContraseñaRU").val()).toString(),
					nombre: $("#txtNombreRU").val(),
					apellido: $("#txtApellidoRU").val(),
					correo: $("#txtCorreoRU").val(),
					telefono: $("#txtTelefonoRU").val(),
					estatus: "A",
					esEmpleado: true,
					direccionUsuario:
						{
							calle: $("#txtCalleRU").val(),
							numero: $("#txtNumeroRU").val(),
							colonia:$("#txtColoniaRU").val(),
							pais: $("#txtPaisRU").val(),
							estado: $("#txtEstadoRU").val(),
							ciudad: $("#txtCiudadRU").val()
						},
					fechaCreacion: new Date()
				}
				Meteor.call('insertarUsuario',usuario,function (error) {
					if (error)
					{
						Materialize.toast(error.reason, 2000, 'rounded');
					}
					else
					{
					    Materialize.toast('Gracias por registrarse.', 2000,'rounded');
						$(":text").each(function(){	
							$($(this)).val('');
						});
						$("#txtTelefonoRU").val("");
						$("#txtCorreoRU").val("");
						$("#txtContraseñaRU").val("");
						$("#txtNumeroRU").val("");
					}
				});
			}
		}
	});	