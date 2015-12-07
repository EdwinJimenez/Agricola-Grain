Meteor.methods({
	//declarar metodos
	insertarUsuario: function(usuario){
		var c = Usuarios.find({usuario:usuario.usuario},{usuario:true}).count();
		if(c==0){
			var usu = Usuarios.insert(usuario);
			return usu;	
		}
		else
			throw new Meteor.Error("uRep", "El Usuario ya existe.");
	},
	verificarUsuario: function(usuario,contraseña){
		Usuarios.find({usuario:usuario,contraseña:contraseña},{usuario:true,esEmpleado:true});
	},
	insertarDireccion:function(direccion){
		DireccionesUsu.insert(direccion);
	}
});