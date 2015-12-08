Meteor.methods({
	obtenSigFolio:function(tF) {
		var a = folios.find({tFolio:tF},{sigFolio:true}).fetch();
		folios.update({tFolio:tF},{$set:{sigFolio:(a[0].sigFolio+1)}});
		return a[0].sigFolio;
	}
});