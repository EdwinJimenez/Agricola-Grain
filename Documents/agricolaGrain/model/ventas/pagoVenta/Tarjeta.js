Tarjeta = function Tarjeta(){
	PagoVenta.call(this, "Tarjeta");
	this.numeroTarjeta = "";
	this.nip = "";
};
Tarjeta.prototype = Object.create(PagoVenta.prototype);
Tarjeta.prototype.constructor = Tarjeta;
Tarjeta.prototype.procesarPago =  function(parametros){
	this.numeroTarjeta = parametros.numeroTarjeta;
	this.nip = parametros.nip;
	console.log(this);
	if(Random.fraction()*2 < 0.01)
		return false;
	return true;
};

Deposito.prototype.presentacionTarjeta = function(){
	console.log("Es un metodo de Tarjeta");
}