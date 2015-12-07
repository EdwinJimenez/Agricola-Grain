Meteor.publish("granos",function(){
	return Granos.find();
});