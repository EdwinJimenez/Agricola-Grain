Meteor.methods({
	insertarDetCompra: function(detCompra){
		DetCompraAux.insert(detCompra);
	},
	updateDetCompra:function(prod,idU,uni,pre){
		DetCompraAux.update({producto:prod,idUsuario:idU},{$set : {unidades:uni,precio:pre}});
	},
	deleteDetCompra:function(id){
		DetCompraAux.remove(id);
	}
});