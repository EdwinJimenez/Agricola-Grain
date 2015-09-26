//VALIDAR QUE NO HAYA CAMPOS VACIOS.
Meteor.validaciones =
{
  validarVacios : function(formulario) 
	{
		var todoCorrecto = true;
		var contador=0;
		for (var i=0; i<formulario.length; i++) 
		{
		    if(formulario[i].type =='text') 
		    {
		    	console.log("VALIDAR VACIOS");
		        if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value))
		        {
		            if(todoCorrecto){
		            	console.log("Entra a mensaje de error");
		            	Materialize.toast("Necesita llenar todos los campos",2000,'rounded');
		            }
		            todoCorrecto=false;
		        }
		    }
		}
		return todoCorrecto;
	},
	validarEmail:function(formulario)
	{
		var todoCorrecto = true;
		var contador=0;
		for (var i=0; i<formulario.length; i++) 
		{
		    if(formulario[i].type =='email') 
		    {
		    	console.log("VALIDAR EMAIL");
		        if(!(/^\S+@\S+\.\S+$/.test(formulario[i].value)))
		        {
		        	console.log("no valido");
		            if(todoCorrecto){
		            	Materialize.toast("Ingrese una dirección de email valida.",2000,'rounded');
		            }
		            todoCorrecto=false;
		        }
		    }
		}
		return todoCorrecto;
	},
	validarDecimales:function(formulario)
	{
		
		var todoCorrecto=true;
		var contador=0;
		for (var i=0; i<formulario.length; i++) 
		{
		    if(formulario[i].type =='number') 
		    {
		    	console.log("VALIDAR DECIMALES");
		        if(!(/^\d{1,15}(?:,\s?\d{3})*(?:\.\d*)?$/.test(formulario[i].value)))
		        {
		        	console.log("valido");
		            if(todoCorrecto){
		            	console.log(formulario[i].value);
		            	Materialize.toast("Ingrese un numero valido.",2000,'rounded');
		            }
		            todoCorrecto=false;
		        }
		    }
		}
		return todoCorrecto;

	},
	validarTelefono:function(formulario)
	{

		var todoCorrecto=true;
		var contador=0;
		for (var i=0; i<formulario.length; i++) 
		{
		    if(formulario[i].type =='tel') 
		    {
		    	console.log("VALIDAR TELEFONO");
		        if(!(/^\d{10}$/.test(formulario[i].value)))
		        {
		        	console.log("valido");
		            if(todoCorrecto){
		            	Materialize.toast("Ingrese un telefono válido.",2000,'rounded');
		            }
		            todoCorrecto=false;
		        }
		    }
		}
		return todoCorrecto;
	}
}