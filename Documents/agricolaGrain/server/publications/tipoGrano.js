Meteor.publish("tipoGrano",function(){
	return Tipos.find();
});