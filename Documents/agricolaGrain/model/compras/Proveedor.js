Proveedor = function Proveedor(datos){
	this.Nombre = datos.Nombre;
	this.Clave = datos.Clave;
	this.Direccion = datos.Direccion;
	this.esExtranjero = datos.esExtranjero;
}
Proveedor.prototype = {
	constructor: Proveedor
}