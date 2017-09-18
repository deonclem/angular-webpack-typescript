import {Utils} from "../../models/Utils";
import "./homepage.scss";

export const HomepageComponent: ng.IComponentOptions = {
    
    // Bindings will get automatically bound to "this" in the controller.
    bindings: {
        helloWorld: '<'
    },
    
    controller: function() {
        
        let ctrl = this;
        
        // Called when the component is instantiated
        ctrl.$onInit = () => {
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
            
            ctrl.clickMeCallback = (message) => {
                console.log(message);
            };
        }
    },
    controllerAs: 'Homepage',
    template: <string>require('./homepage.html')
};