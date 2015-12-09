Meteor.methods({
	obtieneBodegaDisponible: function(unidades){
		console.log("obtieneBodegaDisponible : "+ unidades);
		return Bodegas.findAndModify({
			query: {"$where":"this.capacidad > this.existencia"},
			sort: {_id:1},
			update: {$inc:{existencia:unidades}},
			new: true,
			fields: {_id:1,capacidad:1,existencia:1}
		});
	},
	actualizaExistenciaBodega: function(id, unidades){
		console.log("actualizaExistenciaBodega : "+ unidades);
		var bodega = Bodegas.find(id,{_id: true, capacidad:true, existencia: true}).fetch()[0];
		Bodegas.update(bodega._id,{$set:{existencia: unidades}});
		console.log("finaliza actualizaExistenciaBodega");
	},	
	devuelveExistenciaBodega: function(id, unidades){
		console.log("devuelveExistenciaBodega : "+ unidades);
		var bodega = Bodegas.find(id,{_id: true, capacidad:true, existencia: true}).fetch()[0];
		Bodegas.update(bodega._id,{$inc:{existencia: (-1*unidades)}});
		console.log("finaliza devuelveExistenciaBodega");
	},
	guardaEntradaInventario: function(bodegaID, granoID, fecha, unidades, esImportacion){
		
		var grano = granos.find(granoID,{_id:true, clave:true}).fetch()[0];
		console.log("guardaEntradaInventario");
		console.log("bodega: "+bodegaID + " grano: " + granoID + " fecha: "+ fecha +" unidades:"+unidades);
		console.log(grano);
		if (esImportacion) {
			inventarios.update(
				{bodegaID: bodegaID, granoID: granoID, granoClave: grano.clave, fecha: fecha},
				{ 
					$inc: {unidadesEnLaboratorio: unidades},
					$setOnInsert:{unidadesDisponibles: 0}
				},
    			{upsert:true}
    		);
		}
		else{
			inventarios.update(				
				{bodegaID: bodegaID, granoID: granoID, granoClave: grano.clave, fecha: fecha},
				{ 
					$inc: {unidadesDisponibles: unidades},
					$setOnInsert:{unidadesEnLaboratorio: 0}
				},
    			{upsert:true}
			);
		}
		console.log("finaliza guardaEntradaInventario");
	},
	cancelaEntradaInventario: function(bodegaID, granoID, fecha, unidades, esImportacion){
		//Regresa la existencia al almacen

		var bodega = Bodegas.find(bodegaID,{_id: true, capacidad:true, existencia: true}).fetch()[0];
		Bodegas.update(bodega._id,{$inc:{existencia: (-1*unidades)}});

		//Decrementa inventario
		if(esImportacion){
			inventarios.update(
				{bodegaID: bodegaID, granoID: granoID, fecha: fecha},
				{ 
					$inc: {unidadesEnLaboratorio: (-1*unidades)}
				}
    		);
		}
		else{
			inventarios.update(
				{bodegaID: bodegaID, granoID: granoID, fecha: fecha},
				{ 
					$inc: {unidadesDisponibles: (-1*unidades)}
				}
    		);
		}
	},
	obtieneEntrada: function(granoID, unidades){
		var grano = granos.find(granoID,{_id: 1, clave: 1}).fetch()[0];
		return inventarios.findAndModify({
			query: {granoClave: grano.clave, unidadesDisponibles: {$gt: 0}},
			sort: {fecha: 1},
			update: {$inc: {unidadesDisponibles: (-1 * unidades)}},
			new: true,
			fields: {bodegaID: 1, granoID: 1, fecha: 1, unidadesDisponibles: 1}
		});
	},
	incrementaInventario: function(bodegaID, granoID, fecha, unidades){
		//var bodega = Bodegas.find(bodegaID,{_id: true}).fetch()[0];
		var grano = granos.find(granoID,{_id: true}).fetch()[0];
		
		inventarios.update(
			{bodegaID: bodegaID, granoID: granoID, fecha: fecha},
			{ 
				$inc: {unidadesDisponibles: (unidades)}
			}
		);
	}
});