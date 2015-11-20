Template.carrito.onRendered(function(){
	$('.modal-trigger').leanModal();
	$('select').material_select();
});
Template.carrito.events({
	"click #btnAgregarDireccion":function(){
		$("#nuevaDireccion").show("slow");
	}
});