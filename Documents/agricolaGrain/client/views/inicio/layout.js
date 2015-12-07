Template.layout.onRendered(function(){
  $(".dropdown-button").dropdown();
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
	},
	ArtCarrito:function(){
		return Carrito.find({idUsuario:Session.get("idU")}).count();
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