Meteor.methods({
	catBodegas : function(){
		return Bodegas.find({},{nombreBodega:true,descripcion:true,especificaciones:true}).fetch();
	}
});