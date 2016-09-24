import HomeController from './controller/home/home.controller';

export default function Routes($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: './tpl/home/home.tpl',
		controller: HomeController,
		controllerAs: 'home'
	});

	$locationProvider.html5Mode(true);
}

Routes.$inject = [ '$routeProvider', '$locationProvider' ];