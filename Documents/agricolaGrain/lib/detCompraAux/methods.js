Meteor.methods({
	insertarDetCompra: function(detCompra){
		DetCompraAux.insert(detCompra);
	},
	updateDetCompra:function(prod,idU,uni,pre){
		DetCompraAux.update({producto:prod,idUsuario:idU},{$set : {unidades:uni,precio:pre}});
	},
	deleteDetCompra:function(id){
		DetCompraAux.remove(id);
	},
	detalleTotal:function(idUsu){
		var a = DetCompraAux.find({idUsuario:idUsu}).fetch();
		var cont= a.length;
		var total = 0
		if(cont!=0){
			for(var i=0; i<cont; i++){
				total = total+parseFloat(a[i].importe);
			}
		}
		return total;
	},
	eliminarDetCompra: function(){
		DetCompraAux.remove({});
	}
});