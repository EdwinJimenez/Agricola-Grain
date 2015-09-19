Template.altaBodegas.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});
Template.altaBodegas.events({
	"click #btnRegistrar": function(){
		var cont=0;
		$(":text").each(function(){	
			if(($($(this)).val()=="" || $("#textareaComentarios").val()=="") && cont<1)
			{
				cont++;
			}
		});
		if (cont>0) {
			Materialize.toast("Se nececitan llenar todos los campos", 4000);
		}
		else
		{	
			var bodega = {
				nombreBodega:$("#txtNombre").val(),
				descripcionBodega:$("#txtDescripcion").val(),
				precio:$("#txtPrecio").val(),
				largo:$("#txtLargo").val(),
				ancho:$("#txtAncho").val(),
				alto:$("#txtAlto").val(),
				imagenBodega:"img/bodega_refrigerada.jpg",
				estatus:$("#txtEstatus").val(),
				rentada:("Si"),
				especificaciones:$("#txtEspecificaciones").val(),
				direccionBodega:{
					calle:$("#txtCalle").val(),
					colonica:$("#txtColonia").val(),
					numero:$("#txtNumero").val(),
					pais:$("#txtPais").val(),
					estado:$("#txtEstado").val(),
					ciudad:$("#txtCiudad").val()
				}
			}
			Meteor.call("insertarBodegas",bodega,function(error){
				if(error)
					Materialize.toast(error.reason,4000,'rounded');
				else{
					Materialize.toast("Bodega registrada con exito!!",4000,'rounded');
					$(":text").each(function(){	
						$($(this)).val('');
					});
				}
			});
		}	
	}
});
