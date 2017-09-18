import {HomeService} from "../../services/HomeService";
/**
 * ui-router homepage state
 * @param $stateProvider
 */

export function config($stateProvider: ng.ui.IStateProvider): void {

    'ngInject'; //needed when directly exporting a class or function

    $stateProvider.state({
        name: 'homepage',
        url: '/',
        component: 'homepage',
        resolve: {
            helloWorld: (HomeService: HomeService) => {
                return HomeService.getData();
            }
        }
    });
}