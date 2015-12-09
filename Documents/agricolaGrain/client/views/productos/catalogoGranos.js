Template.catalogoGranos.onRendered(function(){
	$('select').material_select();
	$('.modal-trigger').leanModal();
	Session.set("filtroGrano",null);
});
Template.catalogoGranos.events({
	"change #opcionesCatGranos":function(){
		Session.set("filtroGrano",$("#opcionesCatGranos").val());
		console.log($("#opcionesCatGranos").val());
	}
});
Template.catalogoGranos.helpers({
	opciones:function(){
		return Tipos.find({});
	},
	productos: function(){
		if(Session.get("filtroGrano")==null)
			return granos.find({estatus:"A"});
		else{
			console.log(Session.get("filtroGrano"));
			return granos.find({idTipo:Session.get("filtroGrano")});
		}
	}
});
Template.producto.helpers({
	precioConFormato:function(){
		return Meteor.formato.moneda2(this.precioVenta);
	}
});