/**
 * Created by mysticprg on 15. 1. 9.
 */

require.config({
	baseUrl: 'js',

	paths: {
		'angular': '../../bower_components/angular/angular',
		'angularAMD': '../../bower_components/angularAMD/angularAMD',
		'angular-animate': '../../bower_components/angular-animate/angular-animate',
		'angular-aria': '../../bower_components/angular-aria/angular-aria',
		'angular-material': '../../bower_components/angular-material/angular-material',
		'angular-route': '../../bower_components/angular-route/angular-route',
		'hammer': '../../bower_components/hammerjs/hammer'
	},

	shim: {
		'angularAMD': ['angular'],
		'angular-animate': ['angular'],
		'angular-aria': ['angular'],
		'angular-material': [
			'angular-animate',
			'angular-aria',
			'hammer',
			'css!../../bower_components/angular-material/angular-material.min'
		],
		'angular-route': ['angular']
	},

	map: {
		'*': {
			'css': '../../bower_components/require-css/css',
			'Service': '../services',
			'Controller': '../controllers',
			'Directive': '../directives'
		}
	},

	deps: ['app']
});