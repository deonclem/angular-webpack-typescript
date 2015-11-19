/**
 * ui-router homepage state
 * @param $stateProvider
 */
export function config($stateProvider: ng.ui.IStateProvider): void {
    $stateProvider.state('homepage', {
        url: '/',
        views: {
            "@": {
                template: require('./homepage.html'),
                controller: 'HomepageController',
                controllerAs: 'Home'
            }
        }
    });
}
