Meteor.publish("compras",function(){
	return compras.find();
});
Meteor.publish("compras-por-usuario",function(usuario_id){
	return compras.find({idUsuario:usuario_id});
});