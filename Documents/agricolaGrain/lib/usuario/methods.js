Meteor.methods({
	//declarar metodos
	insertarUsuario: function(usuario){
		Usuarios.insert(usuario);
	}	
});