Deposito = function Deposito(){
	PagoVenta.call(this, "Deposito");
	this.cuenta = "";
	this.referencia = "";
};
Deposito.prototype = PagoVenta.prototype;
Deposito.prototype.constructor = Deposito;
Deposito.prototype.procesarPago =  function(parametros){
	this.cuenta = "456328763097235";
	this.referencia = Random.hexString(14).toUpperCase();
	console.log("Procesar deposito cta:"+this.cuenta+" ref:"+this.referencia);
	return true;
};
Deposito.prototype.presentacionDeposito = function(){
	console.log("Es un metodo de Deposito");
}