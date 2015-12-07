Meteor.methods({
	insertarDetCompra: function(detCompra){
		DetCompra.insert(detCompra);
	},
	updateDetCompra:function(prod,idU,uni,pre){
		DetCompra.update({producto:prod,idUsuario:idU},{$set : {unidades:uni,precio:pre}});
	},
	deleteDetCompra:function(id){
		DetCompra.remove(id);
	}
});