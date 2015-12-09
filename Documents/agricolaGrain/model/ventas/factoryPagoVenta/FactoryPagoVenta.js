FactoryPagoVenta = function FactoryPagoVenta(){
	this.createPagoVenta = function(metodoPago, cantidad){
		var pagoVenta;
		if(metodoPago === "T"){
			pagoVenta = new Tarjeta(cantidad);
		}else if (metodoPago === "D"){
			pagoVenta = new Deposito(cantidad);
		}
		return pagoVenta;
	}
}