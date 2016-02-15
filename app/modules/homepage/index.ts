/**
 * Homepage Component
 */

/**
 * External deps (optionnal)
 */
import 'angular';
require('ui-router/release/angular-ui-router');

/**
 * Internal deps
 */
import {HomepageController} from './HomepageController'
import {config as HomepageRouting} from './HomepageRouting'
import {HelloWorldComponent} from './components/hello-world/helloWorld'

/**
 * Stylesheet
 */
import "./homepage.styl";

angular.module('app.homepage', ["ui.router"])
    .config(HomepageRouting)
    .controller('HomepageController', () => new HomepageController())
    .component('helloWorld', new HelloWorldComponent());
