Template.catalogoBodegas.helpers({
	bodegas : function(){
		return Bodegas.find({estatus:"A",situacion:"L"},{nombreBodega:true,descripcionBodega:true,imagenBodega:true,especificaciones:true});
	}
});
Template.catalogoBodegas.events({
	"click #btnVerMas":function(){
		Router.go("detalleBodega", {_id:this._id._str});
	}
});