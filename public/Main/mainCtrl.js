/**
 * Created by mysticprg on 15. 1. 21.
 */

define(['app'], function (app) {

	app.controller('mainCtrl', ['$scope', function ($scope) {

		var imgUrl = require.toUrl('Main/imgs/');

		$scope.title = 'Main Page';
		$scope.qrcode = imgUrl + 'QRCode.gif';
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
				title: 'Batman: The Dark Knight',
				desc: '조커의 인상적인 연기가 돋보이는 영화'
			},
			{
				id: 2,
				img: imgUrl + 'market.jpg',
				thumb: imgUrl + 'market-thumb.jpg',
				title: '국제시장',
				desc: '부산 국제시장을 무대로 세월을 넘나드는 황정민의 연기'
			}
		];

		$scope.toggleConnect = function() {
			$scope.connected = !$scope.connected;
		};
	}]);
});