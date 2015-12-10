var v; //venta
Template.carrito.onRendered(function(){
	//creanuevaVenta()
	v = new Venta();
	$('.modal-trigger').leanModal();
	$('select').material_select();
	$("#pagoTarjeta").hide();
	$(".puedeComprar").hide();
	var detCarrito = Carrito.find({idUsuario:Session.get("idU")}).fetch();
	if(detCarrito.length!=0){
		for(var i=0; i<detCarrito.length; i++)
		{
			detCarrito[i].idProducto;
			detCarrito[i].unidades;
			var g =granos.find(detCarrito[i].idProducto,{_id:true,precioVenta:true}).fetch()[0];
			v.introducirGrano(detCarrito[i].idProducto,detCarrito[i].unidades,g.precioVenta);
		} 	
	}
});
Template.carrito.events({
	"click #btnAgregarDireccion":function(){
		$("#nuevaDireccion").show("slow");
	},
	"click #btnComprar":function(){
		if($("#direccionEnvio").val()==null || (Carrito.find({idUsuario:Session.get("idU")}).count())==0)
		{
			$(".noPuedeComprar").show("slow");
			$(".puedeComprar").hide("slow");
		}
		else
		{
			$(".puedeComprar").show("slow");
			$(".noPuedeComprar").hide("slow");
		}
	},
	"click #btnAceptarFallo":function(){
		$('#modal2').closeModal();
		$('#modalDireccionEnvio').openModal();
	},
	"click #btnLimpiar":function(){
		Meteor.call("deleteCarrito",Session.get("idU"));
	},
	"click #btnAceptarDir":function(){
		console.log($("#direccionEnvio").val());
		if(($("#direccionEnvio").val()==null))
			$("#mensajeError").show("slow");
		else
		{
			$("#mensajeError").hide("slow");
			$("#modalDireccionEnvio").closeModal();
		}
	},
	"click #btnAceptarCompra":function(){
		$('#modal2').closeModal();
		var tPago;
		var esExportacion;
		var parametros;
		esExportacion = !document.getElementById("rdoNacional").checked;
		if(document.getElementById("rdoDeposito").checked)
			tPago = "D";
		else{
			tPago = "T";
			parametros={
				numeroTarjeta : $("#txtTarjeta").val(),
				nip : CryptoJS.MD5($("txtNip").val()).toString()
			};
		}
		v.setUsuario(Session.get("idU"));
		v.setEsExportacion(esExportacion);
		v.setFecha(new Date());
		var cantidad = v.getTotal();
		if(v.realizarPago(tPago,cantidad,parametros)){
			if(v.actualizaInventario()){
				v.setEsCompletado(true);
			}
			else{
				Materialize.toast("No hay existencia los granos!",2000,'rounded');
				return;
			}
		}else{
			Materialize.toast("Su tarjeta ha sido rechazada",2000,'rounded');
		}

	},
	"click #rdoDeposito":function(){
		$("#pagoTarjeta").hide("slow");
		$("#pagoDeposito").show("slow");
		$("#btnVerFicha").show("slow");
	},
	"click #btnVerFicha":function(){
		//obtener importe total
		var a = Carrito.find({idUsuario:Session.get("idU")}).fetch();
		var cont= a.length;
		var total = 0;
		var importe = 0;
		if(cont!=0){
			for(var i=0; i<cont; i++){
				var b=granos.find({_id:a[i].idProducto}).fetch();
				importe = parseFloat(b[0].precioVenta * parseFloat(a[i].unidades));
				total = total+importe;
			}
		}
		var doc = new jsPDF();
		doc.rect(10, 10, 190, 280);
		doc.text(80, 20, 'Datos para el deposito');
		doc.text(93, 30, 'BANAMEX');
		doc.setFontSize(14);
		doc.text(20, 50, 'Numero de cuenta:');
		doc.text(80,50, '456328763097235')
		doc.text(20, 60, 'Referencia:');
		doc.text(80,60, 'GENERAR')
		doc.rect(10, 63, 190, 1);
		doc.setFontSize(16);
		doc.text(80, 70, 'Datos para el deposito');
		doc.text(93, 80, 'BANORTE');
		doc.setFontSize(14);
		doc.text(20, 100, 'Numero de cuenta:');
		doc.text(80,100, '345698762345631')
		doc.text(20, 110, 'Referencia:');
		doc.text(80,110, 'GENERAR')
		doc.rect(10, 113, 190, 1);
		doc.setFontSize(16);
		doc.text(75, 123, 'Importe:');
		doc.text(98, 123,Meteor.formato.moneda2(String(total)));
			// Output as Data URI
			doc.output('dataurlnewwindow');
		},
		"click #rdoTarjeta":function(){
			$("#pagoTarjeta").show("slow");
			$("#pagoDeposito").hide("slow");
			$("#btnVerFicha").hide("slow");
		},
	"change #direccionEnvio": function(){
		var idDireccion = document.getElementById("direccionEnvio").value;
		v.setDireccion(idDireccion);
	},
	"click #btnAceptarDireccion": function(){
		var dir = {
				clave: "",
				idUsuario: Session.get("idU"),
				nomConsig:$("#txtNombreConsignatario").val(),
				calle: $("#txtCalle").val(),
				numero: $("#txtNumero").val(),
				colonia:$("#txtColonia").val(),
				rfc: $("#txtRFC").val(),
				codigoPostal:$("#txtCp").val(),
				pais: $("#txtPais").val(),
				estado: $("#txtEstado").val(),
				ciudad: $("#txtCiudad").val(),
				telefono: $("#txtTelefono").val(),
				fiscal: false
			};
		Meteor.call("getSigConsecDirecciones", dir,function(error, direccion){
			
			Meteor.call("insertarDireccion",direccion,function(error){
				if(error)
					Materialize.toast(error.reason,2000,'rounded');
				else{
					Materialize.toast("Dirección registrada con éxito.",2000,'rounded');
					$("#txtNombreConsignatario").val("");
					$("#txtCalle").val("");
					$("#txtNumero").val("");
					$("#txtColonia").val("");
					$("#txtRFC").val("");
					$("#txtCp").val("");
					$("#txtPais").val("");
					$("#txtEstado").val("");
					$("#txtCiudad").val("");
					$("#txtTelefono").val("");
				}
			});
		});
},
});
Template.carrito.helpers({
	articulos:function(){
		return Carrito.find({idUsuario:Session.get("idU")});
	},
	opcionesDireccion:function(){
		return DireccionesUsu.find({idUsuario:Session.get("idU")});
		
	},
	total:function(){
		var a = Carrito.find({idUsuario:Session.get("idU")}).fetch();
		var total = 0;
		var importe = 0;
		if(a.length!=0){
			for(var i=0; i<a.length; i++){
				var b=granos.find({_id:a[i].idProducto}).fetch();
				importe = parseFloat(b[0].precioVenta * parseFloat(a[i].unidades));
				total = total+importe;
			}
		}
		return Meteor.formato.moneda2(String(total));
	} 
});
Template.articulo.helpers({
	pUnitario:function(){
		var precio = granos.find({_id:this.idProducto},{precioVenta:true}).fetch();
		return Meteor.formato.moneda2(String(precio[0].precioVenta));
	},
	importeProd:function(){
		var precio = granos.find({_id:this.idProducto},{precioVenta:true}).fetch();
		var totalprod = precio[0].precioVenta * this.unidades;
		return Meteor.formato.moneda2(String(totalprod));
	},
	nombre: function(){
		var nombre = granos.find({_id:this.idProducto},{nombre:true}).fetch();
		return nombre[0].nombre;
	}
});
Template.articulo.events({
	"click #btnEliminarCar":function(){
		Meteor.call("deleteArtCarrito",this._id);
	}
});