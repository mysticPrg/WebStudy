/**
 * Created by mysticprg on 15. 1. 29.
 */

define(['common'], function (common) {

	common.directive('head', ['$rootScope', '$compile',
		function ($rootScope, $compile) {
			return {
				restrict: 'E',
				link: function (scope, elem) {
					var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
					html += '<title>DynamicDisplay: {{title}}</title>';

					elem.append($compile(html)(scope));
					scope.routeStyles = {};
					$rootScope.$on('$routeChangeStart', function (e, next, current) {
						// add Title
						if (next && next.$$route && next.$$route.title) {
							scope.title = next.$$route.title;
						}

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

});