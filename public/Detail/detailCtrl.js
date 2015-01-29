/**
 * Created by mysticprg on 15. 1. 21.
 */

define(['jquery', 'app', 'Directive/scrollWatch'], function ($, app) {
	app.controller('detailCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

		//var fullElm;
		//var scrollPercentage = 0;
		//var KEY_UP = 38;
		//var KEY_DOWN = 40;
		//var top = 0;
		//
		//$scope.$on('$viewContentLoaded', function() {
		//	console.log('asd');
		//	fullElm = $('#full-contents');
		//
		//	fullElm.on('scroll', function () {
		//		scrollPercentage = 100 * this.scrollTop / (this.scrollHeight - this.clientHeight);
		//
		//		fullElm.css('background-position-y', scrollPercentage + '%');
		//	});
		//
		//	$(document).on('keydown', function (e) {
		//
		//		switch (e.keyCode) {
		//			case KEY_UP:
		//				top -= 50;
		//				break;
		//			case KEY_DOWN:
		//				top += 50;
		//				break;
		//		}
		//
		//		if ( top < 0 ) {
		//			top = 0;
		//		}
		//
		//		fullElm.scrollTop(top);
		//	});
		//});
	}]);
});