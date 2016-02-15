export interface CustomRootScope extends ng.IRootScopeService {
    changingState: boolean
}

export function run($rootScope: CustomRootScope, $log: ng.ILogService) {
    "ngInject"; //needed when directly exporting a class or function

    $rootScope.$on("$stateChangeStart", () => {
        $rootScope.changingState = true;
    });

    $rootScope.$on("$stateChangeSuccess", () => {
        $rootScope.changingState = false;
    });

    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
        $rootScope.changingState = false;
        $log.error("State change error: ", error);
    })
}

export default run;