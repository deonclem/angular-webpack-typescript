/**
 * Homepage Component
 */

import 'angular';
require('ui-router/release/angular-ui-router');

import {HomepageController} from './HomepageController'
import {config as HomepageRouting} from './HomepageRouting'

require("./homepage.styl");

angular.module('app.homepage', ["ui.router"])
    .config(HomepageRouting)
    .controller('HomepageController', () => new HomepageController());
