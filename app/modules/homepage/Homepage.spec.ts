import 'angular';
import 'angular-mocks';
import {HomepageController} from './HomepageController';

describe("Homepage", () =>{
    var $httpBackend: ng.IHttpBackendService,
        $controller: ng.IControllerService,
        ctrl: HomepageController;

    beforeEach(() => angular.mock.inject(function (_$httpBackend_: ng.IHttpBackendService, _$controller_: ng.IControllerService) {
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        ctrl = $controller(HomepageController);
    }));

    it('should init the helloWorld variable', () => {
        expect(ctrl.helloWorld).toBe('Hello World !');
    });
});
