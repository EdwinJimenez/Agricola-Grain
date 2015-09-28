Template.altaBodegas.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
});
Template.altaBodegas.events({
	"click #btnRegistrar": function(){
			if(Meteor.validaciones.validarVacios(frmAltaBodegas)&&Meteor.validaciones.validarDecimales(frmAltaBodegas))
			{
				var bodega = {
					nombre:$("#txtNombre").val(),
					descripcion:$("#txtDescripcion").val(),
					precio:$("#txtPrecio").val(),
					largo:$("#txtLargo").val(),
					ancho:$("#txtAncho").val(),
					alto:$("#txtAlto").val(),
					imagenes:"img/bodega_refrigerada.jpg",
					estatus:"A",
					situacion: "L",
					especificaciones:$("#txtEspecificaciones").val(),
					direccion:{
						calle:$("#txtCalle").val(),
						colonia:$("#txtColonia").val(),
						numeroExterior:$("#txtNumeroExterior").val(),
						numeroInterior:$("#txtNumeroInterior").val(),
						pais:$("#txtPais").val(),
						estado:$("#txtEstado").val(),
						ciudad:$("#txtCiudad").val()
					}
			}
			Meteor.call("insertarBodegas",bodega,function(error){
				if(error)
					Materialize.toast(error.reason,2000,'rounded');
				else{
					Materialize.toast("Bodega registrada con éxito.",2000,'rounded');
					$(":text").each(function(){	
						$($(this)).val('');
						$("#verComentarios").load();
					});
					$("#txtAlto").val("");
					$("#txtAncho").val("");
					$("#txtLargo").val("");
					$("#txtPrecio").val("");
					$("#txtNumeroInterior").val("");
					$("#txtNumeroExterior").val("");
				}
			});
		}
	}
});