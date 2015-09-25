Template.Pendiente.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	});
});
Template.Pendiente.helpers({
	Encabezados:function(){
		return Bodegas.find(this.idBodega,{nombre:true});
	}
});
Template.verPendientes.helpers({
	Pendientes : function(){
		return Rentas.find({estatus:"P"});
	}
});
Template.verPendientes.events({
	"click #btnAtendido": function(){
		Meteor.call("modificarRenta",this._id,"R");
		Meteor.call("modificarSituacionBodega",this.idBodega,"R");
	}
});
