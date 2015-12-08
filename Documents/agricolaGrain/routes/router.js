Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name: 'principal'});
Router.route('/informacion',{name: 'informacion'});
Router.route('/catalogoBodegas',{name: 'catalogoBodegas'});
Router.route('/comentarios',{name: 'comentarios'});
Router.route('/acceder',{name: 'acceder'});
Router.route('/registrarme',{name: 'registro'});
Router.route('/frijol',{name:'frijol'});
Router.route('/catalogoGranos',{name:'catalogoGranos'});
Router.route('/carrito',{name:'carrito'});
Router.route('/productos',{name:'productos'});


/*PANTALLAS DE USUARIO Y EMPLEADO*/
Router.route('/94e74b909567e6d814df',{name:'pantallaEmpleado'});
Router.route('/5bd3fc3583e504032106',{name:'pantallaCliente'});

/*PANTALAS BODEGAS*/
Router.route('/detalleBodega/:_id',
	{name:'detalleBodega',
	data: function() {return Bodegas.findOne(new Meteor.Collection.ObjectID(this.params._id));}
});

/*SITIOS EN CONSTRUCCION*/
Router.route('/construccion',{name: 'construccion'});

