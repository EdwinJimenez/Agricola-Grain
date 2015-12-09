Inventarios = function Inventarios(){};
function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
Inventarios.prototype = {
	constructor: Inventarios,
	obtieneBodegaDisponible: function(unidades){

		var bodega = Bodegas.find(
			{"$where":"this.capacidad > this.existencia"},
			{_id:1,capacidad:1,existencia:1}
		).fetch()[0];
		if(!((typeof bodega == "undefined") || bodega == null))
			Meteor.call("devuelveExistenciaBodega",bodega._id, (-1*unidades));
		bodega.existencia = bodega.existencia + unidades;
		return bodega;
		/*
		return Bodegas.findAndModify({
			query: {"$where":"this.capacidad > this.existencia"},
			sort: {_id:1},
			update: {$inc:{existencia:unidades}},
			new: true,
			fields: {_id:1,capacidad:1,existencia:1}
		});
		*/
	},
	obtieneEntrada: function(granoID, unidades){
		var inventario = inventarios.find(
			{granoID:granoID, unidadesDisponibles: {$gt: 0}},
			{bodegaID: 1, granoID: 1, fecha: 1, unidadesDisponibles: 1},
			{sort:{fecha: 1}}
		).fetch()[0];

		if(!((typeof inventario == "undefined") || inventario == null))
			Meteor.call("incrementaInventario",inventario.bodegaID,granoID, inventario.fecha,(-1*unidades));
		inventario.unidadesDisponibles = inventario.unidadesDisponibles - unidades;
		return inventario;
		/*
		var grano = granos.find(granoID,{_id: 1, clave: 1}).fetch()[0];
		
		return inventarios.findAndModify({
			query: {granoClave: grano.clave, unidadesDisponibles: {$gt: 0}},
			sort: {fecha: 1},
			update: {$inc: {unidadesDisponibles: (-1 * unidades)}},
			new: true,
			fields: {bodegaID: 1, granoID: 1, fecha: 1, unidadesDisponibles: 1}
		});
		*/
	},
	incrementaInventario: function(bodegaID, granoID, fecha, unidades){
		//var bodega = Bodegas.find(bodegaID,{_id: true}).fetch()[0];
		//var grano = granos.find(granoID,{_id: true}).fetch()[0];
		
		inventarios.update(
			{bodegaID: bodegaID, granoID: granoID, fecha: fecha},
			{ 
				$inc: {unidadesDisponibles: (unidades)}
			}
		);
	},
	generaEntrada: function(granoID, fecha, esImportacion, unidades){
		var entradas = [];
		var bodega;
		var hacerRollback = false;
		
		while(unidades > 0){
			//Busca bodegas disponibles

			console.log("obtieneBodegaDisponible");
			bodega = this.obtieneBodegaDisponible(unidades);
			console.log(bodega);
			//No encuentra bodega disponible, no puede continuar la compra, se cancela
			if((typeof bodega == "undefined") || bodega == null){
				hacerRollback = true;
				break;
			}

			//las unidades requeridas superan lo disponible
			if(bodega.existencia > bodega.capacidad){
				console.log("IF");
				var unidadesRestantes = bodega.existencia - bodega.capacidad;
				Meteor.call("actualizaExistenciaBodega",bodega._id, bodega.capacidad);
				entradas.push({bodegaID:bodega._id, granoID: granoID, unidades: (unidades - unidadesRestantes)});
				unidades = unidadesRestantes;
			}
			else{
				entradas.push({bodegaID:bodega._id, granoID: granoID, unidades:unidades});
				unidades = 0;
			}
		}

		//En caso de rollback, devuelve a las bodegas las unidades adquiridas y 
		//termina con falso
		if(hacerRollback){
			console.log("hace rollback");
			entradas.forEach(function(entrada){
				Meteor.call("devuelveExistenciaBodega",entrada.bodegaID, entrada.unidades);
			});
			return [];
		}

		//Finalmente guarda la entrada en inventario
		entradas.forEach(function(entrada){
			Meteor.call("guardaEntradaInventario", entrada.bodegaID, granoID, fecha, entrada.unidades, esImportacion);
		});
		return entradas;
	},
	cancelaEntrada: function(bodegaID,granoID,fecha, esImportacion,unidades){	
		Meteor.call("cancelaEntradaInventario",bodegaID, granoID, fecha, unidades, esImportacion);
	},
	generaSalida: function(granoID, fecha, unidades){
		var salidas = [];
		var entrada;
		var hacerRollback = false;
		while(unidades > 0){
			//Busca entradas disponibles
			entrada = this.obtieneEntrada(granoID, unidades);

			//No encuentra entrada disponible, no puede continuar la venta, se cancela
			if((typeof entrada == "undefined") || entrada == null){
				hacerRollback = true;
				break;
			}

			//las unidades requeridas superan lo disponible
			if(entrada.unidadesDisponibles < 0){
				var unidadesRestantes = -1 * entrada.unidadesDisponibles;
				Meteor.call("devuelveExistenciaBodega",entrada.bodegaID, (unidades - unidadesRestantes));
				Meteor.call("incrementaInventario",entrada.bodegaID, entrada.granoID, entrada.fecha, unidadesRestantes);
				salidas.push({bodegaID:entrada.bodegaID, granoID: entrada.granoID, fecha: entrada.fecha, unidades: (unidades - unidadesRestantes)});
				unidades = unidadesRestantes;
			}
			else{
				Meteor.call("devuelveExistenciaBodega",entrada.bodegaID, unidades);
				salidas.push({bodegaID:entrada.bodegaID, granoID: entrada.granoID, fecha: entrada.fecha, unidades:unidades});
				unidades = 0;
			}
		}

		//En caso de rollback, devuelve a las bodegas las unidades adquiridas y 
		//termina con falso
		if(hacerRollback){
			salidas.forEach(function(salida){
				Meteor.call("devuelveExistenciaBodega",salida.bodegaID, (-1*salida.unidades));
				this.incrementaInventario(salida.bodegaID, salida.granoID, salida.fecha, salida.unidades);
				
			});
			return [];
		}
		return salidas;
	},
	cancelaSalida: function(bodegaID,granoID,fecha,unidades){	
		this.incrementaInventario(bodegaID, granoID, fecha, unidades);
	}
};