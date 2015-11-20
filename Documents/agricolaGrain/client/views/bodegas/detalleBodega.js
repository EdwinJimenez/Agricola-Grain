Template.detalleBodega.onRendered(function(){
	$('.collapsible').collapsible({
	      accordion : false
	    });
	$('select').material_select();
	 $('.materialboxed').materialbox();
});
Template.detalleBodega.helpers({
	precioConFormato:function(){
		return Meteor.formato.moneda2(this.precio);
	}
});