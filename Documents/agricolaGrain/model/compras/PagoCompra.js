PagoCompra = function PagoCompra(metodoPago){
	this.metodoPago = metodoPago;
	this.cantidad = 0;
}
PagoCompra.prototype = {
	constructor: PagoCompra,
	setCantidad:function(cantidad){
		this.cantidad = cantidad;
	}
}