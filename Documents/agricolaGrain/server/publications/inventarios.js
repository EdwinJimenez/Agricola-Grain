Meteor.publish("inventarios",function() {
	return inventarios.find();
});