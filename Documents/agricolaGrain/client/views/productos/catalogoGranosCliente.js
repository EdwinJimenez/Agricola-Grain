Template.catalogoGranosCliente.onRendered(function(){
	$('select').material_select();
	$('.modal-trigger').leanModal();
});
Template.catalogoGranosCliente.helpers({
	opciones:function(){
		return Tipos.find({});
	},
	productos: function(){
		return Granos.find({estatus:"A"});
	}
});
Template.productoCliente.helpers({
	precioConFormato:function(){
		return Meteor.formato.moneda2(this.precioVenta);
	},

});
Template.productoCliente.events({
	"click #btnAgregar": function(){
		uniNuevas = document.getElementById("txtToneladas"+this.nombre).value;
		var uni = Carrito.find({idProducto:this._id,idUsuario:Session.get("idU")},{unidades:true}).fetch();
		if(uni.length==0){
			var carrito = {
				idProducto:this._id,
				unidades: uniNuevas,
				idUsuario: Session.get("idU"),
				fecha: new Date()
			}
			Meteor.call("insertarCarrito",carrito);
			return;
		}
		uniNuevas = parseInt(uniNuevas) + parseInt(uni[0].unidades)
		Meteor.call("updateUniCarrito",Session.get("idU"),this._id,String(uniNuevas));
		
	}
});