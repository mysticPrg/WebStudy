/**
 * Created by mysticprg on 15. 1. 21.
 */

define(['app'], function (app) {

	app.controller('mainCtrl', ['$scope', '$location', '$route', function ($scope, $location, $route) {

		var imgUrl = require.toUrl('Main/imgs/');

		$scope.title = 'Main Page';
		$scope.qrcode = imgUrl + 'QRCode.gif';
		$scope.url = 'xAw45';
		$scope.connected = false;
		$scope.contents = [
			{
				id: 0,
				img: imgUrl + 'captain.jpg',
				thumb: imgUrl + 'captain-thumb.jpg',
				title: 'Captain America',
				desc: '캡틴 아메리카의 첫번째 영화'
			},
			{
				id: 1,
				img: imgUrl + 'batman.jpg',
				thumb: imgUrl + 'batman-thumb.jpg',
				title: 'Batman The Dark Knight',
				desc: '조커의 인상적인 연기가 돋보이는 영화'
			},
			{
				id: 2,
				img: imgUrl + 'market.jpg',
				thumb: imgUrl + 'market-thumb.jpg',
				title: '국제시장',
				desc: '그때 그 시절, 굳세게 살아온 우리들의 이야기'
			}
		];

		$scope.toggleConnect = function () {
			$scope.connected = !$scope.connected;
		};

		$scope.goToDetail = function ($index) {
			$('#main-wrapper').fadeOut('fast', function() {
				$location.path('detail');
				$route.reload();
			});
		};
	}]);
});