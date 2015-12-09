Meteor.methods({
	InsertGrano: function(grano){
		granos.insert(grano);
	},
	obtenerGranos: function(){
		return granos.find().fetch();
	}
});