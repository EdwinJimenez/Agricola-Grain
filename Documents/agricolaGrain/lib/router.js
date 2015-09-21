Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name: 'principal'});
Router.route('/informacion',{name: 'informacion'});
Router.route('/catalogoBodegas',{name: 'catalogoBodegas'});
Router.route('/comentarios',{name: 'comentarios'});
Router.route('/acceder',{name: 'acceder'});
Router.route('/registrarme',{name: 'registro'});

/*PANTALLAS DE USUARIO Y EMPLEADO*/
Router.route('/pantallaEmpleado',{name:'pantallaEmpleado'});
Router.route('/pantallaCliente',{name:'pantallaCliente'});
Router.route('/detalleBodega/:_id',
	{name:'detalleBodega',
	data: function() {return Bodegas.findOne(this.params._id);}
});

/*SITIOS EN CONSTRUCCION*/
Router.route('/construccion',{name: 'construccion'});

