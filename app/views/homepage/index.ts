
/**
 * Homepage View
 */

/**
 * Internal deps
 */
import {config as HomepageRouting} from './HomepageRouting'
import {HomepageComponent} from './homepage'
import {HelloWorldComponent} from './components/hello-world/helloWorld'

angular.module('app.homepage', ['ui.router'])
    .config(HomepageRouting)
    .component('homepage', HomepageComponent)
    .component('helloWorld', HelloWorldComponent);
