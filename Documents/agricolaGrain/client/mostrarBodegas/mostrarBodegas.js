Template.mostrarBodegas.helpers({
	bodegasMostrar : function(){
		return Bodegas.find({},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});
//No funciona CHECAR
Template.pantallaEmpleado.events({
"click #editarBodega":function(event,template){
	$("#altaBodega").hide("slow");
	$("#catalogoBodegas").hide("slow");
	$('#editarBodega').show("slow");
}
});