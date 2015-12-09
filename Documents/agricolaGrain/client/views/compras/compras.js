Template.compra.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	});
});
Template.compra.helpers({
	Encabezados:function(){
		return Bodegas.find(this.idBodega,{nombre:true});
	},
	convFechaIni:function(){
		//return this.inicioContrato.toLocaleDateString();
	},
	convFechaFin:function(){
		//return this.finContrato.toLocaleDateString();
	}
});
Template.compras.helpers({
	comprasUsu : function(){
		if(Session.get("esEmpleado"))
			return compras.find({});
		else
			return compras.find({idUsuario:Session.get("idU")});
	}
});
