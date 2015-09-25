Template.editBodega.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
});
Template.editarBodega.events({
	"click #btnGuardar": function(){	
	if(Meteor.validaciones.validarVacios(frmEditarBodega)&&Meteor.validaciones.validarDecimales(frmEditarBodega))
	{			
			Meteor.call("modificarBodega",this._id,$("#txtNombreE").val(),$("#txtDescripcionE").val(),$("#txtPrecioE").val(),$("#txtLargoE").val(),$("#txtAnchoE").val(),$("#txtAltoE").val(),$("#txtCalleE").val(),$("#txtColoniaE").val(),$("#txtEspecificacionesE").val(),$("#txtNumeroExteriorE").val(),$("#txtNumeroInteriorE").val(),$("#txtPaisE").val(),$("#txtEstadoE").val(),$("#txtCiudadE").val(),function(error){
					if(error)
						Materialize.toast(error.reason,4000,'rounded');
					else{
						Materialize.toast("Bodega modificada con exito!!",4000,'rounded');
						$("#altaBodega").hide("slow");
						$('#editarBodega').hide("slow");
						$("#catalogoBodegas").show("slow");
					}
				});
		}
}
});
Template.editarBodega.helpers({
	frmBodega: function(){
		console.log(Bodegas.find(Session.get("idBodega")));
		return Bodegas.find(Session.get("idBodega"));
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