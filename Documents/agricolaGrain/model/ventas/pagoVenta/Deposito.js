Deposito = function Deposito(cantidad){
	PagoVenta.call(this, cantidad);
	this.cuenta = "";
	this.referencia = "";
};
Deposito.prototype = PagoVenta.prototype;
Deposito.prototype.constructor = Deposito;
Deposito.prototype.procesarPago =  function(parametros){
	this.cuenta = parametros.cuenta;
	this.referencia = parametros.referencia;
	console.log("Procesar deposito");
};
Deposito.prototype.presentacionDeposito = function(){
	console.log("Es un metodo de Deposito");
}