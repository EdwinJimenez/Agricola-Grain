Template.registrarEmpleado.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});
Template.registrarEmpleado.events({
		"click #btnRegistrar": function(){
			/*var cont=0;
			$(":text").each(function(){	
				if($($(this)).val()=="" && cont<1)
				{
					cont++;
				}
			});
			if (cont==1) {
				Materialize.toast("Se nececitan llenar todos los campos", 4000);
			}
			else
			{*/
				var usuario = {
					usuario: $("#txtUsuarioRU").val(),
					contraseña: $("#txtContraseñaRU").val(),
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
						Materialize.toast(error.reason, 4000, 'rounded');
					}
					else
					{
					    Materialize.toast('Gracias por registrarse.!', 4000,'rounded');
						$(":text").each(function(){	
							$($(this)).val('');
						});
						$("#txtTelefono").val("");
						$("#txtCorreo").val("");
					}
				});
			//}
		}
	});	