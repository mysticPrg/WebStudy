/**
 * Created by mysticprg on 15. 1. 23.
 */

define(['app', 'jquery'], function (app, $) {

	app.directive('fadeInLoad', ['$rootScope', function ($rootScope) {

		return {
			restrict: 'A',
			link: function (scope, elem) {

				function fadeIn() {
					$(elem).fadeIn('fast');
				}

				$(elem).css('display', 'none');

				scope.$on('$viewContentLoaded', fadeIn);
				$rootScope.$on('$routeChangeSuccess', fadeIn);
			}
		};
	}]);
});