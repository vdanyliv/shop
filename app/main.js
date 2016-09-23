require('./common/styles/bootstrap/css/bootstrap.min.css');

import angular from 'angular';
import uirouter from 'angular-route';
import routing from './main.routes';

angular.module('app.shop', ['ngRoute'])
	.config(routing);


angular.bootstrap(document, ['app.shop']);