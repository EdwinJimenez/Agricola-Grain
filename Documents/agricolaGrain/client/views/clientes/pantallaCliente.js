Template.pantallaCliente.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
$("#solicitudesPendientesU").show("slow");
});
Template.pantallaCliente.events({
"click #btnPendientesU":function(event,template){
	$("#rentasUsuario").hide("slow");
	$("#rentasUsuario").show("slow");
	Session.setPersistent("estatusRenta","P");
},
"click #btnProcesoU":function(event,template){
	$("#rentasUsuario").hide("slow");
	$("#rentasUsuario").show("slow");
	Session.setPersistent("estatusRenta","R");
},
"click #btnFinalizadasU":function(event,template){
	$("#rentasUsuario").hide("slow");
	$("#rentasUsuario").show("slow");
	Session.setPersistent("estatusRenta","F");
}
});