export function config($urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) {
    if (ON_PROD) {
        $locationProvider.html5Mode(true);
    }
    $urlRouterProvider.otherwise('/');
}
