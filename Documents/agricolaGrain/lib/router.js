Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name: 'principal'});
Router.route('/informacion',{name: 'informacion'});
Router.route('/productos',{name: 'construccion'});
Router.route('/catalogoBodegas',{name: 'catalogoBodegas'});
Router.route('/acceder',{name: 'register'});