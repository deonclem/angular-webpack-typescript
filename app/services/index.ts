import * as angular from 'angular';

/**
 * App Services
 */

import {HomeService} from './HomeService';

angular.module('app.services', [])
    .service('HomeService', HomeService);
