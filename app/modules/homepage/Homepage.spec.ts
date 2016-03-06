import 'angular';
import 'angular-mocks';
import '../../services'
import {HomepageController} from './HomepageController';
import {HomeService} from "../../services/HomeService";

describe("Homepage", () =>{
    var $httpBackend: ng.IHttpBackendService,
        $controller: ng.IControllerService,
        ctrl: HomepageController;

    beforeEach(() => {
        angular.mock.module('app.services')
    });

    beforeEach(() => {
        angular.mock.inject(function (_$httpBackend_: ng.IHttpBackendService, _$controller_: ng.IControllerService, _HomeService_: HomeService) {
            $httpBackend = _$httpBackend_;
            $controller = _$controller_;
            ctrl = $controller(HomepageController, {HomeService: _HomeService_});
        })
    });

    it('should init the helloWorld variable', () => {
        expect(ctrl.helloWorld).toBe('Hello World !');
    });
});
