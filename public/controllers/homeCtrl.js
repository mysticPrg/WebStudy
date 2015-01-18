/**
 * Created by mysticprg on 15. 1. 9.
 */


define(['jquery', 'app', 'Service/version', 'Resource/User'], function ($, app) {
	app.controller('homeCtrl', function ($scope, version, User) {
		$scope.version = version;

		$scope.join = function () {

			if ( Object.keys($scope.userForm.$error).length !== 0 ) {
				return;
			}

			var newUser = new User({
				id: $scope.userid,
				name: $scope.username
			});

			newUser.$join(function () {
				$scope.users[newUser.id] = newUser;
				$scope.userid = '';
				$scope.username = '';
			});
		};

		$scope.unjoin = function (user) {
			User.unjoin({id: user.id}, function () {
				delete $scope.users[user.id];
			});
		};

		$scope.modify = function (user) {
			user.name = 'new name';
			user.$modify();
		};

		//User.query(function (users) {
		//	$scope.users = {};
		//	var i;
		//	for (i = 0; i < users.length; i++) {
		//		$scope.users[users[i].id] = users[i];
		//	}
		//});
	});
});