Template.pantallaEmpleado.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
$("#editarBodegas").hide("slow");
$("#eliminarBodegas").hide("slow");
});
Template.pantallaEmpleado.events({
"click #btnNuevaBodega":function(event,template){
	$("#altaBodega").show("slow");
	$("#editarBodegas").hide("slow");
	$("#eliminarBodegas").hide("slow");
},
"click #btnEditarBodega": function(event,template){
	$("#editarBodegas").show("slow");
	$("#altaBodega").hide("slow");
	$("#eliminarBodegas").hide("slow");
},
"click #btnEliminarBodega": function(event,template){
	$("#eliminarBodegas").show("slow");
	$("#altaBodega").hide("slow");
	$("#editarBodegas").hide("slow");
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