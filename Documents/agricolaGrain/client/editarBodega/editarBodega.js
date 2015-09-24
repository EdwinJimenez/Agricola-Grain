Template.editarBodega.events({
	"click #btnGuardar": function(){
		if (validarTexto("#txtNombre","Nombre"));
		{
			console.log("HOLA");
		}
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