/**
 * Created by mysticprg on 15. 1. 23.
 */

define(['app', 'jquery'], function (app, $) {

	app.directive('scrollWatch', ['$window', function ($window) {

		return {
			restrict: 'A',
			scope: {
				scroll: '=scrollWatch'
			},
			link: function (scope, elem, attrs) {

				function onKey(e) {
					console.log(e);
				}

				elem.css({
					'background-image': 'url("' + attrs.scrollWatch + '")',
					'background-size': 'cover',
					'background-attachment': 'fixed',
					'background-position-y': '0%'
				});

				var scrollPercentage = 0;
				var windowElem = $($window);
				function onScroll() {
					console.log(windowElem.scrollTop());
					//scrollPercentage = 100 * this.scrollTop / (this.scrollHeight - this.clientHeight);
					//$(elem).css('background-position-y', scrollPercentage + '%');
				}

				windowElem.on('scroll', scope.$apply.bind(scope, onScroll));
				onScroll();

				//$(elem[0].parentElement).on('scroll', function () {
				//	scrollPercentage = 100 * this.scrollTop / (this.scrollHeight - this.clientHeight);
				//	$(elem).css('background-position-y', scrollPercentage + '%');
				//});

				$(document).on('keydown', elem, onKey);

				//var top = 0;
				//var KEY_UP = 38;
				//var KEY_DOWN = 40;
				//$(document).on('keydown', function (e) {
				//
				//	switch (e.keyCode) {
				//		case KEY_UP:
				//			top -= 50;
				//			break;
				//		case KEY_DOWN:
				//			top += 50;
				//			break;
				//	}
				//
				//	if (top < 0) {
				//		top = 0;
				//	}
				//
				//	$(elem).scrollTop(top);
				//});
			}
		};
	}]);
});