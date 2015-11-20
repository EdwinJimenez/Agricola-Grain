Meteor.publish("bodegas",function(){
	return Bodegas.find();
});