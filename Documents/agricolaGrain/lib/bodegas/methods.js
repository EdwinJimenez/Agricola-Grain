Meteor.methods({
	catBodegas : function(){
		return Bodegas.find({},{nombreBodega:true,descripcion:true,especificaciones:true}).fetch();
	},
	insertarBodegas: function(bodega){
		var c = Bodegas.find({direccion:{calle:bodega.direccion.calle,colonia:bodega.direccion.colonia,numero:bodega.direccion.numero,pais:bodega.direccion.pais,estado:bodega.direccion.estado,ciudad:bodega.direccion.ciudad}}).count();
		if(c==0)
			Bodegas.insert(bodega);
		else
			throw new Meteor.Error("bRep", "La bodega ya existe.");
	},
	modificarSituacionBodega : function(id,situacion){
		Bodegas.update(id,{$set: {situacion:situacion}});
	},
	bajaBodegas: function(id){
		Bodegas.update(id, {$set : {estatus:"B"}});
	},
	insertarRenta: function(renta){
		var b = Bodegas.find(renta.idBodega,{situacion:true}).fetch();
		if(b[0].situacion=="L" || Session.get("idU")==null)
			Rentas.insert(renta);
		else
			throw new Meteor.Error("bRen","La bodega ya esta rentada o no tiene una sesion iniciada,lo sentimos :(");
	},
	modificarRenta: function(id,estatus){
		Rentas.update(id,{$set : {estatus:estatus}});
	}, 
	modificarBodega: function(id,nombre,descripcion,precio,largo,ancho,alto,especificaciones,calle,colonia,numeroExt,numeroInt,pais,estado,ciudad){
		Bodegas.update(id, {$set:{nombre:nombre,descripcion:descripcion,precio:precio,largo:largo,ancho:ancho,alto:alto,especificaciones:especificaciones,direccion: {calle:calle,colonia:colonia,numero:numeroExt,numeroInterior:numeroInt,pais:pais,estado:estado,ciudad:ciudad}}});
	}
});