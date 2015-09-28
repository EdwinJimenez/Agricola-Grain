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
						Materialize.toast(error.reason,2000,'rounded');
					else{
						Materialize.toast("Bodega modificada con éxito.",2000,'rounded');
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
		return Bodegas.find(Session.get("idBodega"));
	}
});