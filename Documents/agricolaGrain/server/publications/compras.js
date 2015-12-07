Meteor.publish("compras",function(){
	return Compras.find();
});