/**
 * Created by mysticprg on 15. 1. 9.
 */

define([
	'angularAMD',
	'hammer',
	'angular-route',
	'angular-material',
	'angular-resource',
	'angular-focus',

	'Controller/indexCtrl'
], function (angularAMD, hammer) {

	window.Hammer = hammer;
	var app = angular.module('WebStudySampleApp', ['ngMaterial', 'ngRoute', 'ngResource', 'focusOn', 'Common']);

	app.config(function ($routeProvider, $mdThemingProvider, $compileProvider) {

		$routeProvider
			// User Pages
			.when('/home', angularAMD.route({
				templateUrl: 'Home/home.html',
				css: ['Home/home.css'],
				controller: 'homeCtrl',
				controllerUrl: 'Home/homeCtrl',
				title: 'Home Page'
			}))
			.when('/main', angularAMD.route({
				templateUrl: 'Main/main.html',
				css: ['Main/main.css'],
				controller: 'mainCtrl',
				controllerUrl: 'Main/mainCtrl',
				title: 'Main Page'
			}))
			.when('/detail', angularAMD.route({
				templateUrl: 'Detail/detail.html',
				css: ['Detail/detail.css'],
				controller: 'detailCtrl',
				controllerUrl: 'Detail/detailCtrl',
				title: 'Detail Page'
			}))

			// Admin Pages
			.when('/admin/login', angularAMD.route({
				templateUrl: 'Admin/Login/login.html',
				css: ['Admin/Login/login.css'],
				controller: 'loginCtrl',
				controllerUrl: 'Admin/Login/loginCtrl',
				title: 'Login'
			}))
			.when('/admin/join', angularAMD.route({
				templateUrl: 'Admin/Join/join.html',
				css: ['Admin/Join/join.css'],
				controller: 'joinCtrl',
				controllerUrl: 'Admin/Join/joinCtrl',
				title: 'Join'
			}))

			// Otherwise
			.otherwise('/main');

		// Pick [ red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey ]
		$mdThemingProvider.theme('default')
			.primaryColor('indigo')
			.accentColor('blue-grey');

		$compileProvider.debugInfoEnabled(false);
	});

	return angularAMD.bootstrap(app);
});