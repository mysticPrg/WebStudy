/**
 * Created by mysticprg on 15. 1. 9.
 */


define(['app', 'Service/version'], function (app) {
	app.controller('homeCtrl', function ($scope, version) {
		$scope.version = version;
	});
});