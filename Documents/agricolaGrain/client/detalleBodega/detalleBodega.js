Template.detalleBodega.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	$('select').material_select();
});
Template.detalleBodega.events({
	"click #btnRentar":function(){
		var fecha= Date.parse($("#dateFechaInicio").val());
		var duracion = $("#cmbDuracionContrato").val();
		var fechafin = new Date(fecha+2629750000);
		var vduracion = parseFloat($("#cmbDuracionContrato").val());
		var vprecio = parseFloat(this.precio);
		if(fecha=="")
		{
			Materialize.toast("No selecciono fecha de renta",4000);
		}
		else
		{
			var renta = {
				idUsuario: "no tiene",
				idBodega: this._id,
				inicioContrato: new Date(fecha),
				finContrato: fechafin,
				duracion: duracion,
				importe: vduracion*vprecio,
				estatus:"P",
				comentarios: $("#txtComentarios").val(),
				fechaCreacion: new Date()
			}
			Meteor.call("insertarRenta",renta);
			Meteor.call("modificarSituacionBodega",this._id,"A");
		}
	},
});