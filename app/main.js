require('./common/styles/bootstrap/css/bootstrap.min.css');
require('./common/styles/custom.css');

import angular from 'angular';
import uirouter from 'angular-route';
import routing from './main.routes';
import productApiServise from './services/product.api.service';
import accountApiService from './services/account.api.service';
import basketService from './services/basket.service';

angular.module('app.shop', ['ngRoute'])
	.config(routing)
	.factory('productApiServise', productApiServise)
	.factory('accountApiService', accountApiService)
	.factory('basketService', basketService);


angular.bootstrap(document, ['app.shop']);