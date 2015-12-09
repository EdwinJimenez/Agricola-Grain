Meteor.subscriptions = {
	subscribeVentas : function(){
		var usuario_id = Session.get("idU");
		if(usuario_id==null)
			return;
		Meteor.subscribe("ventas-por-usuario",usuario_id);
	}
}
Meteor.subscriptions.subscribeVentas();
