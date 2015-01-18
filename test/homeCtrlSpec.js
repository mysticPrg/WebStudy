/**
 * Created by mysticprg on 15. 1. 9.
 */

define([
	'Home/homeCtrl',
	'Service/version',
	'angular-mocks'
], function () {

	describe('variety test', function () {

		beforeEach(module('WebStudySampleApp'));

		var $controller;

		beforeEach(inject(function(_$controller_) {
			$controller = _$controller_;
		}));

		it('controller test', function () {
			var $scope = {};
			$controller('homeCtrl', {$scope: $scope});

			expect($scope.version).toBe(0.1);
		});

		it('service test', inject(function(version) {
			expect(version).toBe(0.1);
		}));

	});
});