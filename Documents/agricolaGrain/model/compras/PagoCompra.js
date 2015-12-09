PagoCompra = function PagoCompra(metodoPago){
	this.metodoPago = metodoPago;
	this.importe = 0;
}
PagoCompra.prototype = {
	constructor: PagoCompra,
	setImporte:function(importe){
		this.importe = importe;
	}
}