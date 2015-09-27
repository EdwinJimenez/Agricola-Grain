Template.detBodega.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	$('select').material_select();
});
Template.verDetalleCliente.events({
	"click #btnAtras":function(){
		$("#verDetalle").hide("slow");
		$("#Bodegas").show("slow");
	},
	"click #btnRentar":function(){
		var fecha= Date.parse($("#dateFechaInicio").val());
		var duracion = $("#cmbDuracionContrato").val();
		var fechafin = new Date(fecha+2629750000);
		var vduracion = parseFloat($("#cmbDuracionContrato").val());
		var vprecio = parseFloat(this.precio);
		if(fecha=="")
		{
			Materialize.toast("No selecciono fecha de renta",4000,'rounded');
		}
		else
		{
			var renta = {
				idUsuario: Session.get("idU"),
				idBodega: this._id,
				inicioContrato: new Date(fecha),
				finContrato: fechafin,
				duracion: duracion,
				importe: vduracion*vprecio,
				estatus:"P",
				comentarios: $("#txtComentarios").val(),
				fechaCreacion: new Date()
			}
			Meteor.call("insertarRenta",renta,function(error){
				if(error)
					Materialize.toast(error.reason,2000,'rounded');
				else{
					Materialize.toast('La solicitud de renta ha sido recibida, se le enviara un correo!!', 4000,'rounded');
				}
			});
			Meteor.call("modificarSituacionBodega",this._id,"A");
			$("#datosRenta").hide();
		}
	}
});
Template.verDetalleCliente.helpers({
	detBodegas:function(){
		return Bodegas.find(Session.get("idBodega"))	
	}
});