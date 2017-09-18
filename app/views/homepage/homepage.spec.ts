/// <reference path="../../../globals.d.ts" />

import './index';

describe("Homepage", () =>{
    
    let $componentController: angular.IComponentControllerService,
        homepageComponent;
    
    beforeEach(() => {
        angular.mock.module('app.homepage');
        angular.mock.inject(function (_$componentController_: angular.IComponentControllerService) {
            $componentController = _$componentController_;
        });
    });
    
    it('should init the helloWorld variable', function() {
        homepageComponent = $componentController('homepage', null, {helloWorld: {message:"Hello World !"}});
        homepageComponent.$onInit(); // $componentController doesn't trigger $onInit() so we need to manually call the function [https://github.com/angular/angular.js/issues/14129]
        expect(homepageComponent.resolvedMessage).toBe('Hello World !');
    });
});