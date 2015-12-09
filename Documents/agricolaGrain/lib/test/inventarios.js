Meteor.methods({
	tt_obtieneBodegaDisponible: function() {
		var unidades = 5;
		console.log(Meteor.call("obtieneBodegaDisponible",unidades));
		//console.log(Meteor.call("obtieneBodegaDisponible",5));
	},
	tt_generaEntrada: function(){
		console.log("Prueba generaEntrada");
		var inv =  new Inventarios();
		inv.generaEntrada("5663b31527553f5447283cd3","20151206",true,15);
	},
	tt_compra: function(){
		console.log("Prueba compra");
		var compra = new Compra();
		compra.introducirFormaPago("T");
		compra.setFecha("20151206");
		compra.setEsImportacion(false);
		var granos = Meteor.call("obtenerGranos");
		console.log(granos);
		granos.forEach(function(grano){
			compra.introducirGrano(grano._id, 13, 30);
		});
		compra.pagoCompra(compra.getTotal());
		console.log(compra);
		if(compra.actualizaInventario()){
			compra.setEsCompletado(true);
			console.log("Si hay existencia");		
		}
		else
			console.log("No hay existencia");
		console.log(compra);
	},
	tt_obtieneEntrada: function() {
		var unidades = 3;
		console.log(Meteor.call("obtieneEntrada", "5663b31527553f5447283cd3",unidades));
		//console.log(Meteor.call("obtieneBodegaDisponible",5));
	},
	tt_generaSalida: function(){
		console.log("Prueba generaSalida");
		var inv =  new Inventarios();
		inv.generaEntrada("5663b31527553f5447283cd3","20151206",3);
	},
	tt_venta: function(){
		console.log("Prueba venta");
		var venta = new Venta();
		venta.setFecha("20151206");
		var granos = Meteor.call("obtenerGranos");
		console.log(granos);
		granos.forEach(function(grano){
			venta.introducirGrano(grano._id, 3, 30);
		});
		venta.realizarPago("T",venta.getTotal());
		console.log(venta);
		if(venta.actualizaInventario()){
			venta.setEsCompletado(true);
			console.log("Si hay existencia");		
		}
		else
			console.log("No hay existencia");
		console.log(venta);
	},
	tt_pagoVenta: function(){
		console.log("Prueba pagoVenta");
		var factoryPago = new FactoryPagoVenta();
		var deposito = factoryPago.createPagoVenta("deposito",500);
		//deposito.setCantidad(500);
		deposito.presentacion();
		deposito.presentacionDeposito();
		deposito.procesarPago({cuenta:"12323",referencia:"RE11170983"});
		console.log(deposito);
		console.log("Cantidad : "+deposito.cantidad);

		var tarjeta = factoryPago.createPagoVenta("tarjeta",130);
		//tarjeta.setCantidad(130);
		tarjeta.presentacion();
		tarjeta.presentacionTarjeta();
		tarjeta.procesarPago({numeroTarjeta:"12327829797848943",nip:"1928"});
		console.log(tarjeta);
		console.log("Cantidad : "+tarjeta.cantidad);


		console.log("Finaliza pagoVenta");
	},
	tt_consecutivos: function(){
		console.log("Prueba consecutivo");
		var granos = Meteor.call("getSigConsecGranos");
		console.log(granos);
	}
});