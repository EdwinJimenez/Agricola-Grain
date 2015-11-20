Template.catalogoBodegas.helpers({
	bodegas : function(){
		return Bodegas.find({estatus:"A"},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});
Template.catalogoBodegas.events({
	"click #btnVerMas":function(){
		Router.go("detalleBodega", {_id:this._id._str});
	}
});
Template.bodega.helpers({
	precioConFormato:function(){
		return Meteor.formato.moneda2(this.precio);
	}
});