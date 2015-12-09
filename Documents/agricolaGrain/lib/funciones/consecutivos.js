Meteor.methods({
	getSigConsecGranos: function(grano){
		var consecutivo = consecutivos.findAndModify({
			query: {nombre: "granos"},
			update: {$inc: {consecutivo: 1}},
			new: true,
			fields: {consecutivo: 1},
			upsert: true
		});
		grano.clave=consecutivo.consecutivo;
		return grano;
	},
	getSigConsecCompras: function(compra){
		var consecutivo = consecutivos.findAndModify({
			query: {nombre: "compras"},
			update: {$inc: {consecutivo: 1}},
			new: true,
			fields: {consecutivo: 1},
			upsert: true
		});
		compra.folio=consecutivo.consecutivo;
		return compra;
	},
	getSigConsecDirecciones: function(direccion){
		var consecutivo = consecutivos.findAndModify({
			query: {nombre: "direcciones"},
			update: {$inc: {consecutivo: 1}},
			new: true,
			fields: {consecutivo: 1},
			upsert: true
		});
		direccion.clave=consecutivo.consecutivo;
		return direccion;
	},
	getSigConsecVentas: function(venta){
		var consecutivo = consecutivos.findAndModify({
			query: {nombre: "ventas"},
			update: {$inc: {consecutivo: 1}},
			new: true,
			fields: {consecutivo: 1},
			upsert: true
		});
		venta.folio=consecutivo.consecutivo;
		return venta;
	}
});