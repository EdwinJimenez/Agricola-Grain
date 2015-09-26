Meteor.publish("usuarios", function(){
	return Usuarios.find();
});