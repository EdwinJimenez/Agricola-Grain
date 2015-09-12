Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name: 'principal'});
Router.route('/informacion',{name: 'informacion'});
Router.route('/productos',{name: 'construccion'});
Router.route('/catalogoBodegas',{name: 'catalogoBodegas'});
Router.route('/comentarios',{name: 'comentarios'});
Router.route('/acceder',{name: 'acceder'});
Router.route('/registrarme',{name: 'register'});

Router.route('/misBodegas',{name: 'misBodegas'});