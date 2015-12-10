FactoryPagoVenta = function FactoryPagoVenta(){
	this.createPagoVenta = function(metodoPago){
		var pagoVenta;
		if(metodoPago === "T"){
			pagoVenta = new Tarjeta();
		}else if (metodoPago === "D"){
			pagoVenta = new Deposito();
		}
		return pagoVenta;
	}
}