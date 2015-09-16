Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name: 'principal'});
Router.route('/informacion',{name: 'informacion'});
Router.route('/catalogoBodegas',{name: 'catalogoBodegas'});
Router.route('/comentarios',{name: 'comentarios'});
Router.route('/acceder',{name: 'acceder'});
Router.route('/registrarme',{name: 'registro'});

Router.route('/misBodegas',{name: 'misBodegas'});

/*SITIOS EN CONSTRUCCION*/
Router.route('/servicios',{name: 'construccion'});

/*JUGANDO*/
Router.route('/altaBodegas',{name:'altaBodegas'});
Router.route('/pantallaEmpleado',{name:'pantallaEmpleado'})

