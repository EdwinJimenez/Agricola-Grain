Template.pantallaCliente.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
$("#solicitudesPendientesU").show("slow");
});
Template.pantallaCliente.events({
"click #btnPendientesU":function(event,template){
	$("#solicitudesPendientesU").show("slow");
	$("#solicitudesProcesoU").hide("slow");
	$("#solicitudesFinalizadasU").hide("slow");
},
"click #btnProcesoU":function(event,template){
	$("#solicitudesPendientesU").hide("slow");
	$("#solicitudesProcesoU").show("slow");
	$("#solicitudesFinalizadasU").hide("slow");
},
"click #btnFinalizadasU":function(event,template){
	$("#solicitudesPendientesU").hide("slow");
	$("#solicitudesProcesoU").hide("slow");
	$("#solicitudesFinalizadasU").show("slow");
}
});