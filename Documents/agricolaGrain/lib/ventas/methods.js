Meteor.methods({
	insertarVenta: function(venta) {
		ventas.insert(venta);
	}
});