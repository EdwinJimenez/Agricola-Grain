Template.Renta.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	});
});
Template.Renta.helpers({
	Encabezados:function(){
		return Bodegas.find(this.idBodega,{nombre:true});
	},
	esEmpleado:function(){
		return Session.get("esEmpleado");
	},
	esPendiente:function(){
		return Session.get("estatusRenta")=="P";
	},
	esEnProceso:function(){
		return Session.get("estatusRenta")=="R";
	},
	convFechaIni:function(){
		return this.inicioContrato.toLocaleDateString();
	},
	convFechaFin:function(){
		return this.finContrato.toLocaleDateString();
	}
});
Template.rentas.helpers({
	Rentas : function(){
		if(Session.get("esEmpleado"))
			return Rentas.find({estatus:Session.get("estatusRenta")});
		else{ 
			return Rentas.find({idUsuario:Session.get("idU"),estatus:Session.get("estatusRenta")});
		}
	}
});
Template.rentas.events({
	"click #btnAtendido": function(){
		Meteor.call("modificarRenta",this._id,"R");
		Meteor.call("modificarSituacionBodega",this.idBodega,"R");
	},
	"click #btnLiberar": function(){
		Meteor.call("modificarRenta",this._id,"F");
		Meteor.call("modificarSituacionBodega",this.idBodega,"L");
	}
});
