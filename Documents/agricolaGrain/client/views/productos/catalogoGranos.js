Template.catalogoGranos.onRendered(function(){
	$('select').material_select();
	$('.modal-trigger').leanModal();
});
Template.catalogoGranos.helpers({
	opciones:function(){
		return Tipos.find({});
	},
	productos: function(){
		return Granos.find({estatus:"A"});
	}
});
Template.producto.helpers({
	precioConFormato:function(){
		return Meteor.formato.moneda2(this.precioVenta);
	}
});