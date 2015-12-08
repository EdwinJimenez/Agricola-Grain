Meteor.publish("folios",function(){
	return folios.find();
});