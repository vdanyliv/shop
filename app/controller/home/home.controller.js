export default class HomeController {
	constructor($scope) {
		$scope.mainTitle = 'Welcome to my test page!';
	}
}

HomeController.$inject = [ '$scope' ];