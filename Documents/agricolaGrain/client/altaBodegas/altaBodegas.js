Template.altaBodegas.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
});
Template.altaBodegas.events({
	"click #btnRegistrar": function(){
			if(Meteor.validaciones.validarVacios(frmAltaBodegas)&&Meteor.validaciones.validarEmail(frmAltaBodegas))
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
					numero:$("#txtNumeroExterior").val(),
					numeroInterior:$("#txtNumeroInterior").val(),
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
						$("#verComentarios").load();
					});
				}
			});
			$("input[type=text]").focus(function() { $(this).select(); });

		}
	}
});
 function validarTexto(id,campo)
 {
	if($(id).val() == "") 
	{ 
		Materialize.toast("Necesita llenar el campo "+ campo, 4000); 
		return false ; 
	}
 }