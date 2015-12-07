	Template.registro.events({
		"click #btnRegistrar": function(){
			if(Meteor.validaciones.validarVacios(frmRegistrarCliente)&&Meteor.validaciones.validarEmail(frmRegistrarCliente)&&Meteor.validaciones.validarTelefono(frmRegistrarCliente))
			{
				var usuario = {
					usuario: $("#txtUsuario").val(),
					contraseña: CryptoJS.MD5($("#txtContraseña").val()).toString(),
					nombre: $("#txtNombre").val(),
					apellido: $("#txtApellido").val(),
					correo: $("#txtCorreo").val(),
					telefono: $("#txtTelefono").val(),
					estatus: "A",
					esEmpleado: false,
					fechaCreacion: new Date()
				}
				
				Meteor.call('insertarUsuario',usuario,function (error,result) {
					if (error)
					{
						Materialize.toast(error.reason, 2000, 'rounded');
					}
					else
					{
						console.log(result);
						var	direccionUsuario = {
							idUsuario : result,
							calle: $("#txtCalle").val(),
							numero: $("#txtNumero").val(),
							colonia:$("#txtColonia").val(),
							rfc: $("#txtRFC").val(),
							pais: $("#txtPais").val(),
							estado: $("#txtEstado").val(),
							ciudad: $("#txtCiudad").val(),
							fiscal: true
						}
						Meteor.call('insertarDireccion',direccionUsuario,function (error){
							if (error)
							{

								Materialize.toast(error.reason, 2000, 'rounded');
							}
						});
					    Materialize.toast('Gracias por registrarse.', 2000,'rounded');
						$(":text").each(function(){	
							$($(this)).val('');
						});
						$("#txtTelefono").val("");
						$("#txtCorreo").val("");
						$("#txtContraseña").val("");
						$("#txtNumero").val("");
					}
				});
				
			}
		}
	});	
Template.registro.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
});