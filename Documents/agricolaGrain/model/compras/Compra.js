Compra = function Compra(){
	this.proveedor = {};
	this.pc = {};
	this.fecha = {};
	this.folio = "";
	this.detalle = [];
	this.esImportacion = "";
	this.total = 0;
	this.esCompletado = false;
}

Compra.prototype = {
	constructor: Compra,
	setProveedor:function(p){
		this.proveedor = p;
	},
	introducirFormaPago:function(metodoPago){
		this.pc = new PagoCompra(metodoPago);
	},
	setFecha:function(fecha){
		this.fecha = fecha;
	},
	introducirGrano:function(granoID,cantidad,precio){
		var dc = new DetalleCompra(granoID,cantidad,precio);
		this.detalle.push(dc);
	},
	pagoCompra:function(cantidad){
		this.pc.setImporte(cantidad);
	},
	actualizaInventario:function(){
		var fecha = this.fecha;
		var esImportacion = this.esImportacion;
		var hayError = false;
		var entradas = [];
		var entradaGrano;

		var inv =  new Inventarios();
		console.log("detalles:"+this.detalle.length);
		this.detalle.some(function(dc, index, _detalle){
			entradaGrano = inv.generaEntrada(dc.granoID, fecha, esImportacion, dc.cantidad);
			if(entradaGrano.length == 0){
				hayError = true;
				return true;
			}
			entradas = _.union(entradas, entradaGrano);
		});
		if(hayError){
			this.hacerRollback(entradas);
			return false;
		}
		return true;
	},
	setEsImportacion:function(esImportacion){
		this.esImportacion = esImportacion;
	},
	hacerRollback:function(entradas){
		var fecha = this.fecha;
		var esImportacion = this.esImportacion;
		var inv =  new Inventarios();
		entradas.forEach(function(entrada){
			inv.cancelaEntrada(entrada.bodegaID, entrada.granoID, fecha, esImportacion, entrada.unidades);
		});
	},
	getTotal:function(){
		var total = 0.0;
		this.detalle.forEach(function(dc){
			total = total + (dc.cantidad * dc.precio);
		});
		return total;
	},
	setEsCompletado:function(esCompletado){
		this.esCompletado = esCompletado;
		Meteor.call("getSigConsecCompras", this, function(error, compra){
			Meteor.call("insertarCompra", compra);
		});
	}
}