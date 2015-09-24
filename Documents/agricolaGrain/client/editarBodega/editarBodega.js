Template.editarBodega.events({
	"click #btnGuardar": function(){
		/*if (validarTexto("#txtNombre","Nombre"));
		{
			console.log("HOLA");
		}*/
	}

});
Template.editarBodega.helpers({
	frmBodega: function(){
		//console.log(Bodegas.find(Session.get("idBodega")));
		return Bodegas.find(Session.get("idBodega"));
	}
});
 function validarTexto(id,campo)
 {
	if($(id).val() == "") 
	{ 
		Materialize.toast("Necesita llenar el campo "+ campo, 4000); 
		return false ; 
	}
 }