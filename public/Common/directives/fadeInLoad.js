/**
 * Created by mysticprg on 15. 1. 23.
 */

define(['jquery', 'common'], function ($, common) {

	common.directive('fadeInLoad', ['$rootScope', function ($rootScope) {

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