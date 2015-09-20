Template.pantallaEmpleado.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
$("#catalogoBodegas").hide("slow");
});
Template.pantallaEmpleado.events({
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