Meteor.publish("comentarios",function(){
	return Comentarios.find();
});