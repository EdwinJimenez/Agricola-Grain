	Template.registro.events({
		"click #btnRegistrar": function(){
			var cont=0;
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
			{
				var usuario = {
					nombreUsuario: $("#txtUsuario").val(),
					contraseña: $("#txtContraseña").val(),
					nombre: $("#txtNombre").val(),
					apellido: $("#txtApellido").val(),
					correo: $("#txtCorreo").val(),
					telefono: $("#txtTelefono").val(),
					estatus: "V",
					esEmpleado: "No",
					direccionUsuario: {
						calle: $("#txtCalle").val(),
						colonia:$("#txtColonia").val(),
						rfc: $("#txtRFC").val(),
						pais: $("#txtPais").val(),
						estado: $("#txtEstado").val(),
						ciudad: $("#txtCiudad").val()
					},
					createdAt: new Date()
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
			}
		}
	});	
Template.registro.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});