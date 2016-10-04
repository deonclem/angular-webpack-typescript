/// <reference path='../_all.ts' />

/**
 * Importing external libs
 */
import 'angular';
import 'angular-material';
import 'angular-ui-router';
// Must use require for the locale - Update to your own
require('angular-i18n/angular-locale_fr-fr.js');

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
import './services/index';

/**
 * Importing the app images
 */
require.context('./assets/img', true, /^\.\//);

/**
 * The main app module.
 */

module app {
    angular
        .module('app', [
            "ui.router",
            "ngMaterial",
            "app.services",
            "app.homepage"
        ])
        .config(config)
        .run(run);
}