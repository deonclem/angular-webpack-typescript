// Component stylesheet
import './hello-world.scss';

export const HelloWorldComponent: ng.IComponentOptions = {

    // Bindings will get automatically bound to the "this" of the component controller.
    bindings: {
        message: '<'
    },
    controller: function() {
        let ctrl = this;
        ctrl.$onInit = () => {
            ctrl.message2 = ", I'm a component.";
        };
    },
    controllerAs: 'HelloWorld',
    template: <string>require('./hello-world.html')
};