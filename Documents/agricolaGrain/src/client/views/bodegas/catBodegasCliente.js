Template.catBodegasCliente.helpers({
	bodegas : function(){
		return Bodegas.find({estatus:"A",situacion:"L"},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});
Template.catBodegasCliente.events({
	"click #btnVerMas":function(){
		$("#verDetalle").show("slow");
		$("#bodegas").hide("slow");
	}
});