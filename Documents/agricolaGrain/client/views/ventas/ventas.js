Template.ventas.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	});
});
Template.venta.helpers({
	Encabezados:function(){
		return Bodegas.find(this.idBodega,{nombre:true});
	},
	convFechaIni:function(){
		return this.inicioContrato.toLocaleDateString();
	},
	convFechaFin:function(){
		return this.finContrato.toLocaleDateString();
	}
});
Template.ventas.helpers({
	ventasUsu : function(){
		if(Session.get("esEmpleado"))
			return Ventas.find({});
		else
			return Ventas.find({idUsuario:Session.get("idU")});
	}
});