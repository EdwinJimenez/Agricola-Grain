Template.altaGrano.helpers({
	opcionesAlta:function(){
		return Tipos.find({});
	}
});
Template.altaGrano.events({
	"click #btnRegistrarGrano": function(){
		var tipo = Tipos.find({nombre:$("#tipoGrano").val()}).fetch();
		if(tipo.length==0){
			Materialize.toast("Seleccione el tipo de grano!!",2000,'rounded');
			return;
		}
		var grano = {
			nombre: $("#txtNombreGrano").val(),
			precioVenta: $("#txtPrecioVenta").val(),
			estatus: "A",
			uMedida: $("#txtUnidadMedida").val(),
			descripcion: $("#txtDescripcionGrano").val(),
			idTipo: tipo[0]._id,
			imagen: "img/"+$("#tipoGrano").val()+".png"
		}
		Meteor.call("InsertGrano",grano,function(error){
			if(error)
				Materialize.toast(error.reason,2000,'rounded');
			else{
				Materialize.toast("Grano registrado con éxito.",2000,'rounded');
			}
		});
	}
});