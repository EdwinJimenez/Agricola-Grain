Meteor.publish("consecutivos", function(){
	return consecutivos.find();
});