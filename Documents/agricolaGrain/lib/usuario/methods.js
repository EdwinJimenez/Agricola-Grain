Meteor.methods({
	//declarar metodos
	insertarUsuario: function(usuario){
		var c = Usuarios.find({nombreUsuario:usuario.nombreUsuario},{nombreUsuario:true,_id:false}).count();
		if(c==0){
			Usuarios.insert(usuario);	
		}
		else
			throw new Meteor.Error("uRep", "El Usuario ya existe");
	},
	verificarUsuario: function(usuario){
		return Usuarios.find({nombreUsuario:usuario.nombreUsuario,contraseña:usuario.contraseña},{nombreUsuario:true,_id:false});
	}
});