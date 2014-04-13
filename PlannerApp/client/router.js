Router.configure({
	layoutTemplate: 'layout'
});

IndexController = RouteController.extend({
	rootPane: 'home'
});

Router.map(function(){
	this.route('home', {
		path: '/',
		controller: 'IndexController'
	});
});