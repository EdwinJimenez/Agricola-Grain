Template.editarBodegas.helpers({
	bodegas : function(){
		return Bodegas.find({},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});