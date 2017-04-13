import * as angular from 'angular';
import {capitalize} from "./capitalize";

angular.module('app.filters', [])
.filter('capitalize', capitalize);