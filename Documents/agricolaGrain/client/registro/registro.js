	Template.registro.events({
		"click #btnRegistrar": function(){
			var nombreUsuario =$(".txtUsuario").val();
			var contraseña =$(".txtContraseña").val();
			var nombre =$(".txtNombre").val();
			var apellido =$(".txtApellido").val();
			var correo =$(".txtCorreo").val();
			var telefono =$(".txtTelefono").val();
			var estatus = "V";
			var esEmpleado = "No";
			var calle =$(".txtCalle").val();
			var colonia =$(".txtColonia").val();
			var rfc =$(".txtRFC").val();
			var pais =$(".txtPais").val();
			var estado =$(".txtEstado").val();
			var ciudad =$(".txtCiudad").val();
			var usuario = {
				nombreUsuario: nombreUsuario,
				contraseña: contraseña,
				nombre: nombre,
				apellido: apellido,
				correo: correo,
				telefono: telefono,
				estatus: estatus,
				esEmpleado: esEmpleado,
				direccionUsuario: {
					calle: calle,
					colonia:colonia,
					rfc: rfc,
					pais: pais,
					estado: estado,
					ciudad: ciudad
				},
				createdAt: new Date()
			}
			Meteor.call('insertarUsuario',usuario,function (error, result) {
			  if (error)
			  {
			    Materialize.toast('Error. Asegurese de haber llenado los campos', 4000, 'rounded');
			 }
			  else
			    Materialize.toast('Gracias por registrarse.!', 4000,'rounded');
			});
		}
	});	
Template.registro.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});