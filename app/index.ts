/// <reference path='../_all.ts' />

/**
 * Importing external libs
 */
import 'angular';
import 'angular-material';
import 'angular-ui-router';

/**
 * Importing external stylesheets
 */
import 'angular-material/angular-material.css';

/**
 * Importing internal components
 */
import {config} from './config/core/coreConfig'
import {run} from './config/core/coreRun'
import './modules/homepage/index';

/**
 * Require tests if testing
 * (Using require as 'import' is only usable at the top level
 */
if(ON_TEST === true){
    require('./modules/homepage/Homepage.spec.ts');
}

/**
 * The main app module.
 */

module app {
    angular
        .module('app', [
            "ui.router",
            "ngMaterial",
            "app.homepage"
        ])
        .config(config)
        .run(run);
}