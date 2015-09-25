Template.acceder.events({
	"click #btnEntrar": function(){
		if(Meteor.validaciones.validarVacios(frmAcceder))
		{
			var usuario=$("#txtUsuario").val();
			var contraseña=$("#txtContraseña").val();
				var u = Usuarios.find({usuario:usuario,contraseña:contraseña},{usuario:true,esEmpleado:true}).fetch();
				if(u.length==0)
				{
					Materialize.toast("Usuario o contraseña incorrectos.",2000,'rounded');
					return;
				}
					Session.setPersistent("usuario",u[0].usuario);
					Session.setPersistent("esEmpleado",u[0].esEmpleado);
					Session.setPersistent("idU",u[0]._id);
					if(u[0].esEmpleado)
					{
						Router.go("pantallaEmpleado");
						$("#menuPrincipal").hide("slow");
					}
					else
					{
						Router.go("pantallaCliente");
						$("#menuPrincipal").hide("slow");
					}
		}
	}
});