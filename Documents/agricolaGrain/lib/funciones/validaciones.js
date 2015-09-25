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
		        if(!(/^\S+@\S+\.\S+$/.test(formulario[i].value)))
		        {
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
		        if(!(/^\d{1,3}(?:,\s?\d{3})*(?:\.\d*)?$/.test(formulario[i].value)))
		        {
		            if(todoCorrecto){
		            	Materialize.toast("Ingrese una dirección de email valida.",2000,'rounded');
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
		    if(formulario[i].type =='phone') 
		    {
		        if(!(/^\d{9}$/.test(formulario[i].value)))
		        {
		            if(todoCorrecto){
		            	Materialize.toast("Ingrese una dirección de email valida.",2000,'rounded');
		            }
		            todoCorrecto=false;
		        }
		    }
		}
		return todoCorrecto;
	}
}