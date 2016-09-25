import HomeController from './controller/home/home.controller';
import ProductPageController from './controller/product/product.page.controller';
import ProductListController from './controller/product/product.list.controller';
import AccountContoller from './controller/account/account.controller';
import OrderStatusController from './controller/order/order.status.controller';

export default function Routes($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: './tpl/home/home.tpl',
		controller: HomeController,
		controllerAs: 'home'
	})
	.when('/product-list', {
		templateUrl: './tpl/product/product-list.tpl',
		controller: ProductListController,
		controllerAs: 'product'
	})
	.when('/account', {
		templateUrl: './tpl/account/user-account-page.tpl',
		controller: AccountContoller,
		controllerAs: 'account'
	})
	.when('/order/status', {
		templateUrl: './tpl/order/success-order-page.tpl',
		controller: OrderStatusController,
		controllerAs: 'order'
	})
	.when('/product/:id', {
		templateUrl: './tpl/product/product-page.tpl',
		controller: ProductPageController,
		controllerAs: 'product'
	});

	$locationProvider.html5Mode(true);
}

Routes.$inject = [ '$routeProvider', '$locationProvider' ];