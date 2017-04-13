import * as ng from 'angular';

// Directive stylesheet
import './hello-world.scss';

interface HelloWorldComponentScope extends ng.IScope
{
    HelloWorld: any
}

export class HelloWorldComponent implements ng.IComponentOptions {

    public template:string = <string>require('./hello-world.html');
    public bindings:{ [boundProperty: string]: string; } = {
        message: "<"
    };
    public controllerAs:string = 'HelloWorld';

    public controller = ($scope: HelloWorldComponentScope):void => {
        'ngInject';

        let ctrl = $scope.HelloWorld;
        ctrl.message2 = ", I'm a component.";
    };
}