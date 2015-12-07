Meteor.publish("proveedores",function(){
	return Proveedores.find();
});