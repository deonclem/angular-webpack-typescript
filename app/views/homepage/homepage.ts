import {Utils} from "../../models/Utils";
import "./homepage.scss";

interface HomepageComponentScope extends ng.IScope
{
    Homepage: any
}

export class HomepageComponent implements ng.IComponentOptions {
    
    public template:string = <string>require('./homepage.html');
    public bindings:{ [boundProperty: string]: string; } = {
        helloWorld: "<"
    };
    public controllerAs:string = 'Homepage';
    
    public controller = ($scope: HomepageComponentScope):void => {
        'ngInject';
        
        let ctrl = $scope.Homepage;
        ctrl.resolvedMessage = ctrl.helloWorld.message;
        ctrl.componentMessage = 'Hello';
    
        let object = [
            {
                val: 2
            },
            {
                val: 7
            },
            {
                val: 1
            },
            {
                val: 10
            },
            {
                val: 8
            }
        ];
    
        ctrl.minValue = Utils.getMinValueFromArrayOfObjects(object, 'val');
        ctrl.maxValue = Utils.getMaxValueFromArrayOfObjects(object, 'val');
    };
}