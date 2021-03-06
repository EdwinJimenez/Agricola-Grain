Template.Comentario.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
});
Template.verComentarios.helpers({
	verComentarios : function(){
		return Comentarios.find({estatus:"N"},{nombreCompleto:true,correo:true,comentario:true,fechaCreacion:true});
	}
});
Template.Comentario.events({
	"click #btnAtendido":function(){
		Meteor.call("actualizarEstatus",this._id);
	}
});
Template.Comentario.helpers({
	convFechaCom:function(){
		return this.fechaCreacion.toLocaleDateString();
	}
});