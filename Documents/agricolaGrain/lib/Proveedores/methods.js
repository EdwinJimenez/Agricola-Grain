Meteor.methods({
	insertProveedor: function(proveedor){
		Proveedores.insert(proveedor);
	}
});