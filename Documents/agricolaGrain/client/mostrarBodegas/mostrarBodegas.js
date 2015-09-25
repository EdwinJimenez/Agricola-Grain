Template.mostrarBodegas.helpers({
	bodegasMostrar : function(){
		return Bodegas.find({estatus:"A"},{nombre:true,descripcion:true,imagenes:true,especificaciones:true});
	}
});
//No funciona CHECAR
Template.pantallaEmpleado.events({
	"click #btnEditar":function(event,template){
		$("#altaBodega").hide("slow");
		$("#catalogoBodegas").hide("slow");
		$('#editarBodega').show("slow");
		Session.setPersistent("idBodega",this._id);
	},
	"click #btnEliminar": function(){
		Meteor.call("bajaBodegas",this._id);
		Materialize.toast("La bodega '"+this.nombre+"' fue eliminada exitosamente",4000);
	}
});