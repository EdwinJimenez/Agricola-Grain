Tarjeta = function Tarjeta(cantidad){
	PagoVenta.call(this, cantidad);
	this.numeroTarjeta = "";
	this.nip = "";
};
Tarjeta.prototype = Object.create(PagoVenta.prototype);
Tarjeta.prototype.constructor = Tarjeta;
Tarjeta.prototype.procesarPago =  function(parametros){
	this.numeroTarjeta = parametros.numeroTarjeta;
	this.nip = parametros.nip;
};

Deposito.prototype.presentacionTarjeta = function(){
	console.log("Es un metodo de Tarjeta");
}