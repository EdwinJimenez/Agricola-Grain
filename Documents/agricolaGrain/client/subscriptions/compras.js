Meteor.subscriptions = {
	subscribeCompras : function(){
		if(Session.get("idU")==null)
			return;
		var usuario_id = Session.get("idU");
		Meteor.subscribe("compras-por-usuario",usuario_id);
	}
}
Meteor.subscriptions.subscribeCompras();
