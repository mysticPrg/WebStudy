/**
 * Created by mysticprg on 15. 1. 9.
 */

define(['Controller/homeCtrl', 'Service/version', 'angular-mocks'], function (homeCtrl) {
	describe('variety test', function () {

		beforeEach(module('WebStudySampleApp'));

		it('controller test', inject(function ($controller) {
			var scope = {};
			homeCtrl = $controller('homeCtrl', {$scope: scope});

			expect(scope.version).toBe(0.1);
		}));

		it('service test', inject(function (version) {

			expect(version).toBe(0.1);

		}));

	});
});