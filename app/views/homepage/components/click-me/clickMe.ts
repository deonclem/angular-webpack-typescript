/**
 * A sample directive that displays a message when clicked on the element and triggers a callback method
 */


// If you don't want to bother with an extra Interface, just remove the ng.IDirective types from the function
interface ClickMeInterface extends ng.IScope{
    message: string;
    callback: Function;
}

// Inject any service here
export function ClickMeDirective(): ng.IDirective {
    "ngInject";

    return <ng.IDirective> {
    
        restrict: 'A',
        scope: {
            message: '@',
            callback: '&'
        },
        link: function (scope: ClickMeInterface, element: JQLite) {
            element.bind('click', () => {
                alert(scope.message);
                scope.callback({message: 'Callback fired'});
            })
        }
    };
}