Template.Finalizada.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});
Template.verFinalizadas.helpers({
	Finalizadas : function(){
		if(Session.get("esEmpleado"))
			return Rentas.find({estatus:"F"});
		else
			return Rentas.find({idUsuario:Session.get("idU"),estatus:"F"});
	}
});
Template.Finalizada.helpers({
	EncabezadoFinalizadas: function(){
		return Bodegas.find(this.idBodega,{nombre:true});
	}
});
