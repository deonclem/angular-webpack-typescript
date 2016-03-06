/**
 * Homepage Component
 */

/**
 * Internal deps
 */
import {HomepageController} from './HomepageController'
import {config as HomepageRouting} from './HomepageRouting'
import {HelloWorldComponent} from './components/hello-world/helloWorld'

/**
 * Stylesheet
 */
import "./homepage.scss";

angular.module('app.homepage', ["ui.router"])
    .config(HomepageRouting)
    .controller('HomepageController', HomepageController)
    .component('helloWorld', new HelloWorldComponent());
