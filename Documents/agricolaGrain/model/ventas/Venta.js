Venta = function Venta(){
	this.usuario = {};
	this.pv = {};
	this.fecha = {};
	this.folio = "";
	this.detalle = [];
	this.direccion = {};
	this.esCompletado = false;
}

Venta.prototype = {
	constructor: Venta,
	setUsuario:function(u){
		this.usuario = u;
	},
	realizarPago:function(metodoPago, cantidad){
		var factoryPago = new FactoryPagoVenta();
		var pago = factoryPago.createPagoVenta(metodoPago,cantidad);
		this.pv = pago;
	},
	setFecha:function(fecha){
		this.fecha = fecha;
	},
	setDireccion:function(direccionEnvio){
		this.direccion = direccionEnvio;
	},
	introducirGrano:function(granoID,cantidad,precio){
		var dv = new DetalleVenta(granoID,cantidad,precio);
		this.detalle.push(dv);
	},
	actualizaInventario:function(){
		var fecha = this.fecha;
		var salidas = [];
		var salidaGrano;
		var hayError = false;
		
		var inv =  new Inventarios();
		this.detalle.some(function(dv, index, _detalle){
			salidaGrano = inv.generaSalida(dv.granoID, fecha, dv.cantidad);
			if(salidaGrano.length == 0){
				hayError = true;
				return true;
			}
			salidas = _.union(salidas, salidaGrano);
		});
		if(hayError){
			this.hacerRollback(salidas);
			return false;
		}
		return true;
	},
	hacerRollback:function(salidas){
		var inv =  new Inventarios();
		salidas.forEach(function(salida){
			inv.cancelaSalida(salida.bodegaID, salida.granoID, salida.fecha, salida.unidades);
		});
	},
	getTotal:function(){
		var total = 0.0;
		this.detalle.forEach(function(dv){
			total = total + (dv.cantidad * dv.precio);
		});
		return total;
	},
	setEsCompletado:function(esCompletado){
		this.esCompletado = esCompletado;
		Meteor.call("getSigConsecVentas",this, function(error, venta){
			Meteor.call("insertarVenta", venta);
		});
	}
}