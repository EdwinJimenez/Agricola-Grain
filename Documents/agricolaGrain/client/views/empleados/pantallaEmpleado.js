Template.pantallaEmpleado.onRendered(function(){
$('ul.tabs').tabs();
$('select').material_select();
$("#catalogoBodegas").hide("slow");
});
Template.pantallaEmpleado.events({
"click #btnPendientes":function(event,template){
	$("#rentasUsuarios").hide("slow");
	$("#rentasUsuarios").show("slow");
	Session.setPersistent("PosisionMR","Solicitudes Pendientes");
	Session.setPersistent("estatusRenta","P");
},
"click #btnProceso":function(event,template){
	$("#rentasUsuarios").hide("slow");
	$("#rentasUsuarios").show("slow");
	Session.setPersistent("PosisionMR","Rentas actuales");
	Session.setPersistent("estatusRenta","R");
},
"click #btnFinalizadas":function(event,template){
	$("#rentasUsuarios").hide("slow");
	$("#rentasUsuarios").show("slow");
	Session.setPersistent("PosisionMR","Rentas finalizadas");
	Session.setPersistent("estatusRenta","F");
},
"click #btnNuevaBodega":function(event,template){
	$("#altaBodega").show("slow");
	$("#catalogoBodegas").hide("slow");
	$("#editarBodega").hide("slow");
},
"click #btnCatalogoBodega": function(event,template){
	$("#catalogoBodegas").show("slow");
	$("#altaBodega").hide("slow");
	$("#editarBodega").hide("slow");
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
},
"click #btnAltaGrano": function(event,template){
	$("#altaGrano").show("slow");
	$("#nuevaCompra").hide("slow");
},
"click #btnNuevaCompra": function(event,template){
	$("#nuevaCompra").show("slow");
	$("#altaGrano").hide("slow");
}
});
Template.pantallaEmpleado.helpers({
	labelRentas: function(){
		return Session.get("PosisionMR");
	}
});