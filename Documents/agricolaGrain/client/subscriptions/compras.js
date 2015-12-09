Deps.autorun(function() {
  	if(Session.get("idU")==null)
			return;
	var usuario_id = Session.get("idU");		
	if (Session.get("esEmpleado")) {
		Meteor.subscribe("compras-por-empleado",usuario_id);
	}
});
