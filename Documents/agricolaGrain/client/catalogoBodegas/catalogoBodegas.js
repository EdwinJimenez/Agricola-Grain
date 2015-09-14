Template.catalogoBodegas.helpers({
	bodegas : function(){
		return catBodegas = Bodegas.find({},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});