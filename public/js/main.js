/**
 * Created by mysticprg on 15. 1. 9.
 */

require.config({
	baseUrl: 'js',

	paths: {
		'jquery': '../../bower_components/jquery/dist/jquery',
		'angular': '../../bower_components/angular/angular',
		'angularAMD': '../../bower_components/angularAMD/angularAMD',
		'angular-animate': '../../bower_components/angular-animate/angular-animate',
		'angular-aria': '../../bower_components/angular-aria/angular-aria',
		'angular-material': '../../bower_components/angular-material/angular-material',
		'angular-route': '../../bower_components/angular-route/angular-route',
		'angular-resource': '../../bower_components/angular-resource/angular-resource',
		'angular-focus': '../../bower_components/ng-focus-on/ng-focus-on',
		'hammer': '../../bower_components/hammerjs/hammer',

		'common': '../Common/common'
	},

	shim: {
		'angular': {
			'exports': 'angular',
			'deps': ['jquery']
		},
		'angularAMD': ['angular'],
		'angular-animate': ['angular'],
		'angular-aria': ['angular'],
		'angular-route': ['angular'],
		'angular-resource': ['angular'],
		'angular-focus': ['angular'],
		'angular-material': [
			'angular-animate',
			'angular-aria',
			'hammer',
			'css!../../bower_components/angular-material/angular-material.min',
			'css!../../bower_components/angular-material/default-theme'
		],
		'hammer': {
			'exports': 'hammer'
		}
	},

	map: {
		'*': {
			'css': '../../bower_components/require-css/css',
			'Service': '../Common/services',
			'Resource': '../Common/resources',
			'Filter': '../Common/filters',
			'Directive': '../Common/directives',
			'Controller': '../Common/controllers',
			'Common': '../Common',

			// Pages
			'Home': '../Home',
			'Main': '../Main',
			'Detail': '../Detail',
			'Admin': '../Admin'
		}
	},

	deps: ['app']
});