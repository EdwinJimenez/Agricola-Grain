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
			console.log(Usuarios.find({nombreUsuario:"hola",contraseña:"1234"},{nombreUsuario:true,esEmpleado:true}));
		}
		
	}
});