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
	}
});