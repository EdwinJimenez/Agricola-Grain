PagoVenta = function PagoVenta(tipoPago){
	this.cantidad = 0;
	this.tipoPago = tipoPago;
}
PagoVenta.prototype = {
	constructor: PagoVenta,
	setCantidad: function(cantidad){
		this.cantidad = cantidad;
	},
	procesarPago: function(parametros){
		console.log("Procesar pago Venta");
	},
	presentacion: function(){
		console.log("Es un metodo de pagoVenta");
	}
}

/*
function PagoVenta(cantidad){
	this.cantidad = cantidad;
}
PagoVenta.prototype.procesarPago = function(parametros){
		console.log("Procesar pago Venta");
	};
PagoVenta.prototype.presentacion = function(){
		console.log("Es un metodo de pagoVenta");
	};
*/
