
Meteor.subscriptions = {
	subscribeRentas : function(){
		if(Session.get("idU")==null)
			return;

		if (Session.get("esEmpleado")) {
			console.log(Session.get("idU"));
			console.log(Session.get("esEmpleado"));
			console.log("Subscribe empleado");
			Meteor.subscribe("rentas");
		}
		else{
			var usuario_id = Session.get("idU");
			console.log("Subscribe cliente con id="+usuario_id);
			Meteor.subscribe("rentas",usuario_id);
		}
	}
}

Meteor.subscriptions.subscribeRentas();
