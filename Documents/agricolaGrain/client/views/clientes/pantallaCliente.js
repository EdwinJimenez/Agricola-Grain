Template.pantallaCliente.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
$("#solicitudesPendientesU").show("slow");
});
Template.pantallaCliente.events({
	"click #btnPendientesU":function(event,template){
		$("#rentasUsuario").hide("slow");
		$("#rentasUsuario").show("slow");
		Session.setPersistent("PosisionMR","solicitudes pendientes");
		Session.setPersistent("estatusRenta","P");
	},
	"click #btnProcesoU":function(event,template){
		$("#rentasUsuario").hide("slow");
		$("#rentasUsuario").show("slow");
		Session.setPersistent("PosisionMR","Rentas actuales");
		Session.setPersistent("estatusRenta","R");
	},
	"click #btnFinalizadasU":function(event,template){
		$("#rentasUsuario").hide("slow");
		$("#rentasUsuario").show("slow");
		Session.setPersistent("PosisionMR","Rentas finalizadas");
		Session.setPersistent("estatusRenta","F");
	},
	"click #Rentas":function(){
		$("#rentasUsuario").hide("slow");
		$("#rentasUsuario").show("slow");
		Session.setPersistent("PosisionMR","solicitudes pendientes");
		Session.setPersistent("estatusRenta","P");
	}
});
Template.pantallaCliente.helpers({
	labelRentas: function(){
		return Session.get("PosisionMR");
	}
});