Template.Finalizada.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});
Template.verFinalizadas.helpers({
	Finalizadas : function(){
		return Rentas.find({estatus:"F"});
	}
});
Template.Finalizada.helpers({
	EncabezadoFinalizadas: function(){
		return Bodegas.find(this.idBodega,{nombre:true});
	}
});
