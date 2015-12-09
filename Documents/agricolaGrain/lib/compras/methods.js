Meteor.methods({
	insertarCompra: function(compra) {
		compras.insert(compra);
	}
});