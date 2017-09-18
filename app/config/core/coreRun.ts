import { TransitionService } from '@uirouter/core/lib/transition/transitionService';


export interface CustomRootScope extends ng.IRootScopeService {
    changingState: boolean
}

export function run($transitions: TransitionService, $rootScope: CustomRootScope) {
    "ngInject"; //needed when directly exporting a class or function
    
    $transitions.onStart({}, function(trans: any) {
        $rootScope.changingState = true;
        trans.promise.finally(() => $rootScope.changingState = false);
    });
}
