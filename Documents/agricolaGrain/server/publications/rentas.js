Meteor.publish("rentas",function(){
	return Rentas.find();
});
Meteor.publish("rentas-por-cliente",function(usuario_id){
	return Rentas.find({idUsuario:usuario_id});
});