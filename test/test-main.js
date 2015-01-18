!function () {
	'use strict';

	/*
	 Create list of file to run in test.  Making sure that app_test.js is
	 always the first to run
	 */
	var firstFile, firstFileREGEXP = /test-main\.js$/i,
		testFiles = [], testFilesREGEXP = /(Spec)\.js$/i;

	Object.keys(window.__karma__.files).forEach(function (file) {
		if (firstFileREGEXP.test(file)) {
			firstFile = file;
		} else if (testFilesREGEXP.test(file)) {
			testFiles.push(file);
		}
	});

	if (firstFile) {
		testFiles.unshift(firstFile);
	}

	require.config({
		baseUrl: '/base/public/js',

		paths: {
			'angular': '../../bower_components/angular/angular',
			'angularAMD': '../../bower_components/angularAMD/angularAMD',
			'angular-animate': '../../bower_components/angular-animate/angular-animate',
			'angular-aria': '../../bower_components/angular-aria/angular-aria',
			'angular-material': '../../bower_components/angular-material/angular-material',
			'angular-route': '../../bower_components/angular-route/angular-route',
			'angular-resource': '../../bower_components/angular-resource/angular-resource',
			'hammer': '../../bower_components/hammerjs/hammer',
			'jquery': '../../bower_components/jquery/dist/jquery',

			'angular-mocks': '../../bower_components/angular-mocks/angular-mocks'
		},

		shim: {
			'angular': {
				'exports': 'angular'
			},
			'angularAMD': ['angular'],
			'angular-animate': ['angular'],
			'angular-aria': ['angular'],
			'angular-route': ['angular'],
			'angular-resource': ['angular'],
			'angular-material': [
				'angular-animate',
				'angular-aria',
				'hammer',
				'css!../../bower_components/angular-material/angular-material.min',
				'css!../../bower_components/angular-material/default-theme'
			],

			'angular-mocks': ['angular']
		},

		map: {
			'*': {
				'css': '../../bower_components/require-css/css',
				'Service': '../services',
				'Controller': '../controllers',
				'Directive': '../directives',
				'Resource': '../resources',
				'Filter': '../filters'
			}
		},

		deps: testFiles,

		callback: window.__karma__.start
	});
}();