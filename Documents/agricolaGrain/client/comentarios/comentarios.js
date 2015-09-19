Template.comentarios.events({
	"click #btnEnviarComentarios": function(){
		var cont=0;
			$(":text").each(function(){	
				if(($($(this)).val()=="" || $("#textareaComentarios").val()=="") && cont<1)
				{
					cont++;
				}
			});
			if (cont==1) {
				Materialize.toast("Se nececitan llenar todos los campos", 4000);
			}
			else
			{
			var comentario = {
				nombreCompleto : $("#txtNombre").val(),
				correo: $("#txtCorreo").val(),
				comentario: $("#textareaComentarios").val(),
				estatusComentario:"N",
				createdAt: new Date()
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