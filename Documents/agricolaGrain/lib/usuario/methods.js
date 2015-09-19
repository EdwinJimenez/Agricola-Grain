Meteor.methods({
	//declarar metodos
	insertarUsuario: function(usuario){
		var c = Usuarios.find({nombreUsuario:usuario.nombreUsuario},{nombreUsuario:true,}).count();
		if(c==0){
			Usuarios.insert(usuario);	
		}
		else
			throw new Meteor.Error("uRep", "El Usuario ya existe");
	},
	verificarUsuario: function(usuario,contraseña){
		Usuarios.find({nombreUsuario:usuario,contraseña:contraseña},{nombreUsuario:true,esEmpleado:true});
	}
});