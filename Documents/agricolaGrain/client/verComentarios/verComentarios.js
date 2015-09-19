Template.Comentario.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});
Template.verComentarios.helpers({
	verComentarios : function(){
		return Comentarios.find({estatusComentario:"N"},{nombreCompleto:true,correo:true,comentario:true,createdAt:true});
	}
});
Template.Comentario.events({
	"click #btnAtendido":function(){
		console.log("Aqui");
		Meteor.call("actualizarEstatus",this._id);
	}
});