Template.enProceso.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});
Template.verEnProceso.helpers({
	enProcesos : function(){
		if(Session.get("esEmpleado"))
			return Rentas.find({estatus:"R"});
		else
			return Rentas.find({idUsuario:Session.get("idU"),estatus:"R"});

	}
});
Template.verEnProceso.events({
	"click #btnLiberar": function(){
		Meteor.call("modificarRenta",this._id,"F");
		Meteor.call("modificarSituacionBodega",this.idBodega,"L");
	}
});
Template.enProceso.helpers({
	encabezadoProcesos: function(){
		return Bodegas.find(this.idBodega,{nombre:true});	
	}
});