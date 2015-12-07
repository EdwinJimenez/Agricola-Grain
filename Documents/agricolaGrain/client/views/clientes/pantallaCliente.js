Template.pantallaCliente.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
//$("#solicitudesPendientesU").show("slow");
$("#Granos").hide();
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
	},
	"click #btnProductos": function(){
		$("#Bodegas").hide();
		$("#verDetalle").hide();
		$("#Granos").show("slow");
	},
	"click #btnBodegas": function(){
		$("#Granos").hide();
		$("#verDetalle").hide();
		$("#Bodegas").show("slow");
	}
});
Template.pantallaCliente.helpers({
	labelRentas: function(){
		return Session.get("PosisionMR");
	}
});