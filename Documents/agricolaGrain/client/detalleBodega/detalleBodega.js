Template.detalleBodega.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	$('select').material_select();
});
Template.detalleBodega.events({
	"click #btnRentar":function(){
		var fecha= $("#dateFechaInicio").val();
		var duracion = $("#cmbDuracionContrato").val();
		var fechafin = $("#dateFechaInicio").val();
		var vduracion = parseFloat($("#cmbDuracionContrato").val());
		var vprecio = parseFloat(this.precio);
		if(fecha=="")
		{
			Materialize.toast("No selecciono fecha de renta",4000);
		}
		else
		{
			var renta = {
				idUsuario: "Cliente",
				idBodega: this._id,
				inicioContrato: fecha,
				finContrato: fechafin,
				duracion: duracion,
				importe:vduracion*vprecio,
				estatus:"P",
				comentarios: $("#txtComentarios").val(),
				fechaCreacion: new Date()
			}
			Meteor.call("insertarRenta",renta);
			Meteor.call("modificarSituacionBodega",this._id,"A");
		}
	},
});