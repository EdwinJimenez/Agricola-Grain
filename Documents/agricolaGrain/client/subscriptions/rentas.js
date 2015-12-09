Deps.autorun(function() {
    //sub.stop(); // Stop the previous subscription, because it's changed.
    //console.log("entra deps.autorun "+ Session.get("idU"));
    if(Session.get("idU")==null)
			return;
	var usuario_id = Session.get("idU");		
	if (Session.get("esEmpleado")) {
		Meteor.subscribe("rentas");
		Meteor.subscribe("compras-por-empleado",usuario_id);
	}
	else{
		Meteor.subscribe("rentas-por-cliente",usuario_id);
	}
});

