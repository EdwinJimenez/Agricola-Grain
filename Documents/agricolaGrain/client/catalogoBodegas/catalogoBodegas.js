Template.catalogoBodegas.helpers({
	bodegas : function(){
		return Bodegas.find({},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});
Template.catalogoBodegas.events({
	"click #btnVerMas":function(){
		console.log(this._id);
		Router.go("detalleBodega", {_id:this._id});
	}
});