Meteor.methods({
	insertarCometario: function(comentario){
		Comentarios.insert(comentario);
	}
});