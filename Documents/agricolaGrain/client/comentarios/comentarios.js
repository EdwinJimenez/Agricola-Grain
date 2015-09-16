Template.comentarios.events({
	"click #btnEnviarComentarios": function(){
		var comentario = {
			nombreCompleto : $("#txtNombre").val(),
			correo: $("#txtCorreo").val(),
			comentario: $("#textareaComentarios").val()
		}
		Meteor.call("insertarCometario", comentario,function(error){
			if(error)
				Materialize.toast("Ocurrio un error", 4000, 'rounded');
			else{
				Materialize.toast("Gracias por sus comentarios!",4000,'rounded');
				$("#txtNombre").val("");
				$("#txtCorreo").val("");
				$("#textareaComentarios").val("");
			}
		});
	}
});