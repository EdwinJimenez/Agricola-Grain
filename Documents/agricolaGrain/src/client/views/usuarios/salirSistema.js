Template.salirSistema.events({
	"click #btnNo":function(){
		$("#salir").hide("slow");
		$('ul.tabs').tabs('select_tab', 'solicitudes');
	},
	"click #btnSi":function(){
		Session.setPersistent("idU",null);
		Session.setPersistent("usuario",null);
		Session.setPersistent("esEmpleado",null);
		$("#menuPrincipal").show("slow");
	}
});