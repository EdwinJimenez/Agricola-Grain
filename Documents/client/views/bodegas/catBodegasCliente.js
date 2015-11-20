Template.catBodegasCliente.helpers({
	bodegas : function(){
		return Bodegas.find({estatus:"A",situacion:"L"},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});
Template.catBodegasCliente.events({
	"click #btnVerMas":function(){
		$("#verDetalle").show("slow");
		$("#Bodegas").hide("slow");
		Session.setPersistent("idBodega",this._id);
	}
});
Template.bodegaCliente.helpers({
	precioConFormato:function(){
		return Meteor.formato.moneda2(this.precio);
	}
});