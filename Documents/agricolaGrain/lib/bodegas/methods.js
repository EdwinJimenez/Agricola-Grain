Meteor.methods({
	catBodegas : function(){
		return Bodegas.find({},{nombreBodega:true,descripcion:true,especificaciones:true}).fetch();
	},
	insertarBodegas: function(bodega){
		var c = Bodegas.find({direccionBodega:{calle:bodega.direccionBodega.calle,colonia:bodega.direccionBodega.colonia,numero:bodega.direccionBodega.numero,pais:bodega.direccionBodega.pais,estado:bodega.direccionBodega.estado,ciudad:bodega.direccionBodega.ciudad}}).count();
		if(c==0)
			Bodegas.insert(bodega);
		else
			throw new Meteor.Error("bRep", "La bodega ya existe");
	}
});