/**
 * Created by mysticprg on 15. 1. 9.
 */

define([
	'angularAMD',
	'hammer',
	'angular-route',
	'angular-material',
	'angular-resource',
	'angular-focus'
], function (angularAMD, hammer) {

	function setHeadDirecrive(app) {
		app.directive('head', ['$rootScope', '$compile',
			function ($rootScope, $compile) {
				return {
					restrict: 'E',
					link: function (scope, elem) {
						var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
						elem.append($compile(html)(scope));
						scope.routeStyles = {};
						$rootScope.$on('$routeChangeStart', function (e, next, current) {
							if (current && current.$$route && current.$$route.css) {
								if (!angular.isArray(current.$$route.css)) {
									current.$$route.css = [current.$$route.css];
								}
								angular.forEach(current.$$route.css, function (sheet) {
									delete scope.routeStyles[sheet];
								});
							}
							if (next && next.$$route && next.$$route.css) {
								if (!angular.isArray(next.$$route.css)) {
									next.$$route.css = [next.$$route.css];
								}
								angular.forEach(next.$$route.css, function (sheet) {
									scope.routeStyles[sheet] = sheet;
								});
							}
						});
					}
				};
			}
		]);
	}

	window.Hammer = hammer;
	var app = angular.module('WebStudySampleApp', ['ngMaterial', 'ngRoute', 'ngResource', 'focusOn']);

	app.config(function ($routeProvider, $mdThemingProvider, $compileProvider) {

		$routeProvider
			.when('/home', angularAMD.route({
				templateUrl: 'Home/home.html',
				css: 'Home/home.css',
				controller: 'homeCtrl',
				controllerUrl: 'Home/homeCtrl'
			}))
			.when('/main', angularAMD.route({
				templateUrl: 'Main/main.html',
				css: ['Main/main.css'],
				controller: 'mainCtrl',
				controllerUrl: 'Main/mainCtrl'
			}))

			.otherwise('/main');

		$mdThemingProvider.theme('default')
			.primaryColor('cyan')
			.accentColor('yellow');

		$compileProvider.debugInfoEnabled(false);
	});

	setHeadDirecrive(app);

	return angularAMD.bootstrap(app);
});