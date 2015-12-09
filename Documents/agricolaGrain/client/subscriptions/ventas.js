Deps.autorun(function() {
	if(Session.get("idU")==null)
			return;

	var usuario_id = Session.get("idU");
	if (Session.get("esEmpleado")) {
		Meteor.subscribe("ventas");
	}
	else{
		Meteor.subscribe("ventas-por-cliente",usuario_id);
	}
});
