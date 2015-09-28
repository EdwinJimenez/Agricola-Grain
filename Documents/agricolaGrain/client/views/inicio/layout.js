Template.layout.onRendered(function(){
  $(".dropdown-button").dropdown();
  // Initialize collapse button
  //$(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
});
Template.layout.helpers({
	noEstaLogueado:function(){
		return Session.get("idU")==null;
	},
	nombreUsuario:function(){
		return Session.get("usuario");
	},
	esEmp:function(){
		return Session.get("esEmpleado");
	}
});
Template.layout.events({
	"click #navAcceder":function(){
		console.log("entramos!");
		if(Session.get("idU")==null)
			Router.go("/acceder");
		else{
			location.reload(true);
			Router.go("/");
		}
	}
});