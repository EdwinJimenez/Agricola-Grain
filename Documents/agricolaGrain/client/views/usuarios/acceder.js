Template.acceder.events({
	"click #btnEntrar": function(){
		if(Session.get("idU")!=null){
			location.reload(true);
			Router.go("/");
		}
		else
			if(Meteor.validaciones.validarVacios(frmAcceder))
			{
				var usuario=$("#txtUsuario").val();
				var contraseña=CryptoJS.MD5($("#txtContraseña").val()).toString();
				var u = Usuarios.find({usuario:usuario,contraseña:contraseña},{usuario:true,esEmpleado:true}).fetch();
					if(u.length==0)
					{
						Materialize.toast("Usuario o contraseña incorrectos.",2000,'rounded');
						return;
					}
						Session.setPersistent("usuario",u[0].usuario);
						Session.setPersistent("esEmpleado",u[0].esEmpleado);
						Session.setPersistent("idU",u[0]._id);
						Session.setPersistent("PosisionMR","Solicitudes pendientes");
						//Meteor.subscriptions.subscribeRentas();
						Meteor.call("subscribeRentas");
						if(u[0].esEmpleado)
						{
							Router.go("/94e74b909567e6d814df");
						}
						else
						{
							Router.go("/5bd3fc3583e504032106");
						}
			}
	}
});