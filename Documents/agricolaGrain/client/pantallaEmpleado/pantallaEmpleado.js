Template.pantallaEmpleado.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
$("#catalogoBodegas").hide("slow");
});
Template.pantallaEmpleado.events({
"click #btnPendientes":function(event,template){
	$("#solicitudesPendientes").show("slow");
	$("#solicitudesProceso").hide("slow");
	$("#solicitudesFinalizadas").hide("slow");
},
"click #btnProceso":function(event,template){
	$("#solicitudesPendientes").hide("slow");
	$("#solicitudesProceso").show("slow");
	$("#solicitudesFinalizadas").hide("slow");
},
"click #btnFinalizadas":function(event,template){
	$("#solicitudesPendientes").hide("slow");
	$("#solicitudesProceso").hide("slow");
	$("#solicitudesFinalizadas").show("slow");
},
"click #btnNuevaBodega":function(event,template){
	$("#altaBodega").show("slow");
	$("#catalogoBodegas").hide("slow");
},
"click #btnCatalogoBodega": function(event,template){
	$("#catalogoBodegas").show("slow");
	$("#altaBodega").hide("slow");
},
"click #btnNuevoUsuario":function(event,template){
	$("#nuevoUsuario").show("slow");
	$("#editarUsuario").hide("slow");
	$("#eliminarUsuario").hide("slow");
},
"click #btnEditarUsuario": function(event,template){
	$("#editarUsuario").show("slow");
	$("#nuevoUsuario").hide("slow");
	$("#eliminarUsuario").hide("slow");
},
"click #btnEliminarUsuario": function(event,template){
	$("#eliminarUsuario").show("slow");
	$("#nuevoUsuario").hide("slow");
	$("#editarUsuario").hide("slow");
}
});