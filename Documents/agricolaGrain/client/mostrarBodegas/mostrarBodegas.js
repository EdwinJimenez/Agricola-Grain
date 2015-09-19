Template.mostrarBodegas.helpers({
	bodegasMostrar : function(){
		return Bodegas.find({},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});