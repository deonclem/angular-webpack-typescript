import 'angular';

/**
 * App Services
 */

import {HomeService} from './HomeService.ts';


angular.module('app.services', [])
    .service('HomeService', HomeService);
