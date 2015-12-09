Meteor.publish("ventas",function(){
	return ventas.find();
});
Meteor.publish("ventas-por-usuario",function(usuario_id){
	return ventas.find({idUsuario:usuario_id});
});