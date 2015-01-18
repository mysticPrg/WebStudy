/**
 * Created by mysticprg on 15. 1. 9.
 */

define([
	'angularAMD',
	'hammer',
	'angular-route',
	'angular-material',
	'angular-resource'
], function (angularAMD, hammer) {

	window.Hammer = hammer;
	var app = angular.module('WebStudySampleApp', ['ngMaterial', 'ngRoute', 'ngResource']);

	app.config(function ($routeProvider, $mdThemingProvider) {

		$routeProvider
			.when('/home', angularAMD.route({
				templateUrl: 'views/home.html',
				controller: 'homeCtrl',
				controllerUrl: 'Controller/homeCtrl'
			}))

			.otherwise('/home');

		$mdThemingProvider.theme('default')
		    .primaryColor('blue')
		    .accentColor('orange');
	});

	return angularAMD.bootstrap(app);
});