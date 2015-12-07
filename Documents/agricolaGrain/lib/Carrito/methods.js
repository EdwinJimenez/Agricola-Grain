Meteor.methods({
	insertarCarrito:function(carrito){
		Carrito.insert(carrito);
	},
	updateUniCarrito:function(idUsu,idProd,uniNuevas){
		Carrito.update({idUsuario:idUsu,idProducto:idProd},{$set:{unidades:uniNuevas}});
	},
	deleteArtCarrito:function(idUsu,idProd){
		Carrito.remove({idUsuario:idUsu,idProducto:idProd});
	},
	deleteCarrito:function(idUsu){
		Carrito.remove({idUsuario:idUsu});
	},
	insertDireccion:function(idUsuario,calle,num,col,pais,estado,ciudad,nombreconsig,cp,tel){
		db.Usuarios.update({ usuario: "judi" },{ $push: {calle:"pro",numero:"pro",colonia:"pro",pais:"pro",ciudad:"pro",nombreconsig:"pro",codigoPostal:"no",telefono:"nose" } })
	}
});