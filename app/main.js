require('./common/styles/bootstrap/css/bootstrap.min.css');
require('./common/styles/custom.css');

import angular from 'angular';
import uirouter from 'angular-route';
import routing from './main.routes';
import productApiServise from './services/product.api.service';

angular.module('app.shop', ['ngRoute'])
	.config(routing)
	.factory('productApiServise', productApiServise);


angular.bootstrap(document, ['app.shop']);