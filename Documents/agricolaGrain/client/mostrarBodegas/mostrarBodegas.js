Template.mostrarBodegas.helpers({
	bodegasMostrar : function(){
		return Bodegas.find({},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});
//No funciona CHECAR
Template.pantallaEmpleado.events({
	"click #btnEditar":function(event,template){
		$("#altaBodega").hide("slow");
		$("#catalogoBodegas").hide("slow");
		$('#editarBodega').show("slow");
	},
	"click #btnEliminar": function(){
		Meteor.call("eliminarBodegas",this._id);
		Materialize.toast("La bodega '"+this.nombreBodega+"' fue eliminada exitosamente",4000);
	}
});