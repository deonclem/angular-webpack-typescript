import * as angular from 'angular';
import 'angular-ui-router';

/**
 * Homepage View
 */

/**
 * Internal deps
 */
import {HomepageComponent} from './homepage'
import {config as HomepageRouting} from './HomepageRouting'
import {HelloWorldComponent} from './components/hello-world/helloWorld'

angular.module('app.homepage', ['ui.router'])
    .config(HomepageRouting)
    .component('homepage', new HomepageComponent())
    .component('helloWorld', new HelloWorldComponent());
