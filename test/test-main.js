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
            'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
            'hammer': '../../bower_components/hammerjs/hammer',

            'Service': '../services',
            'Controller': '../controllers',
            'Directive': '../directives'
        },

        shim: {
            'angularAMD': ['angular'],
            'angular-animate': ['angular'],
            'angular-aria': ['angular'],
            'angular-mocks': ['angular'],
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
                'css': '../../bower_components/require-css/css'
            }
        },
        deps: testFiles,

        callback: window.__karma__.start,
    });
}();