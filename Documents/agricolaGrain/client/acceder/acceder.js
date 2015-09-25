Template.acceder.events({
	"click #btnEntrar": function(){
		var usuario=$("#txtUsuario").val();
		var contraseña=$("#txtContraseña").val();
		if(usuario == ""||contraseña == "")
		{
			Materialize.toast("Se nececitan llenar todos los campos", 4000);
		}
		else
		{
			console.log(usuario + "   " + contraseña);
			var u = Usuarios.find({usuario:usuario,contraseña:contraseña},{usuario:true,esEmpleado:true}).fetch();
			Session.setPersistent("usuario",u[0].usuario);
			Session.setPersistent("esEmpleado",u[0].esEmpleado);
			Session.setPersistent("idU",u[0]._id);
			if(u[0].esEmpleado)
				Router.go("pantallaEmpleado");
			else
				Router.go("pantallaCliente");
		}
	}
});