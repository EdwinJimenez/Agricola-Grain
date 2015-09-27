Meteor.methods({
	insertarCometario: function(comentario){
		Comentarios.insert(comentario);
	},
	actualizarEstatus:function(id){
		Comentarios.update(id,{$set : {estatus:"A"}});
	}
});