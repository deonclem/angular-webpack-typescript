/// <reference path='../_all.ts' />

/**
 * Importing external libs
 */
import 'angular';
import 'angular-material';
require('ui-router/release/angular-ui-router'); // AFAIK ui-router doesn't support the import syntax with typescript

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