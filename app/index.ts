import * as angular from 'angular';

/**
 * Importing external libs
 */
import 'angular';
import 'angular-material';
import '@uirouter/angularjs';
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
import './filters';
import './views';
import './services';

/**
 * Importing the app images
 */
require.context('./assets/img', true, /^\.\//);

/**
 * The main app module.
 */

angular.module('app', [
        "ui.router",
        "ngMaterial",
        "app.filters",
        "app.services",
        "app.views"
    ])
    .config(config)
    .run(run);
