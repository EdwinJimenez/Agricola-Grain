Template.comentarios.events({
	"click #btnEnviarComentarios": function(){
			if(Meteor.validaciones.validarVacios(frmComentarios)&&Meteor.validaciones.validarEmail(frmComentarios))
			{
			var comentario = {
				nombreCompleto : $("#txtNombre").val(),
				correo: $("#txtCorreo").val(),
				comentario: $("#textareaComentarios").val(),
				estatus:"N",
				fechaCreacion: new Date()
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
	}
});