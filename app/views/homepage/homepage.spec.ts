/// <reference path="../../../globals.d.ts" />

import './index';

describe("Homepage", () =>{
    
    let scope : ng.IRootScopeService,
     $componentController: angular.IComponentControllerService,
     homepageComponent;
    
    beforeEach(() => {
        
        angular.mock.module('app.homepage');
        
        angular.mock.inject((_$rootScope_: angular.IRootScopeService, _$componentController_: angular.IComponentControllerService) => {
            scope = _$rootScope_.$new();
            $componentController = _$componentController_;
        });
    });
    
    it('should init the helloWorld variable', () => {
            homepageComponent = $componentController('homepage', {$scope: scope}, {helloWorld: {message:"Hello World !"}});
            expect(homepageComponent.resolvedMessage).toBe('Hello World !');
    });
});