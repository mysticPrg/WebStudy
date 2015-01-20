/**
 * Created by mysticprg on 15. 1. 21.
 */

define(['app'], function (app) {

	app.controller('mainCtrl', ['$scope', function ($scope) {

		var imgUrl = 'Main/imgs/';

		$scope.contents = [
			{
				id: 0,
				img: imgUrl + 'captain.jpg',
				title: 'Captain America',
				desc: '캡틴 아메리카의 첫번째 영화'
			},
			{
				id: 1,
				img: imgUrl + 'batman.jpg',
				title: 'Batman: The Dark Knight',
				desc: '조커의 인상적인 연기가 돋보이는 영화'
			},
			{
				id: 2,
				img: imgUrl + 'market.jpg',
				title: '국제시장',
				desc: '부산 국제시장을 무대로 세월을 넘나드는 황정민의 연기'
			}
		];
	}]);
});