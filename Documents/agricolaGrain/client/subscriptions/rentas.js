
Meteor.subscriptions = {
	subscribeRentas : function(){
		if(Session.get("idU")==null)
			return;

		if (Session.get("esEmpleado")) {
			Meteor.subscribe("rentas");
		}
		else{
			var usuario_id = Session.get("idU");
			Meteor.subscribe("rentas",usuario_id);
		}
	}
}

Meteor.subscriptions.subscribeRentas();
