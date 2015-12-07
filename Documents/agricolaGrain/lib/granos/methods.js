Meteor.methods({
	InsertGrano: function(grano){
		Granos.insert(grano);
	}
});