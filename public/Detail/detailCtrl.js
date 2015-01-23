/**
 * Created by mysticprg on 15. 1. 21.
 */

define(['jquery', 'app', 'common'], function ($, app) {
	app.controller('detailCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

		var fullElm = $('#full-contents');
		var scrollPercentage = 0;
		fullElm.on('scroll', function () {
			scrollPercentage = 100 * this.scrollTop / (this.scrollHeight - this.clientHeight);

			fullElm.css('background-position-y', scrollPercentage + '%');
		});

		var KEY_UP = 38;
		var KEY_DOWN = 40;
		var top = 0;

		$(document).on('keydown', function (e) {

			switch (e.keyCode) {
				case KEY_UP:
					top -= 50;
					break;
				case KEY_DOWN:
					top += 50;
					break;
			}

			if ( top < 0 ) {
				top = 0;
			}

			fullElm.scrollTop(top);
		});

	}]);
});