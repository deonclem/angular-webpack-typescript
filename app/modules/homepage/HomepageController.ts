import {HomeService} from "../../services/HomeService";
import {Utils} from "../../models/Utils";
/**
 * The homepage controller for the app. The controller:
 * - display a <hello world> message
 */
export class HomepageController {
    public helloWorld: string;
    public componentMessage: string;
    public minValue: number;
    public maxValue: number;

    constructor(HomeService: HomeService){
        "ngInject";
        this.helloWorld = HomeService.getData().message;
        this.componentMessage = 'Hello';
        
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
        
        this.minValue = Utils.getMinValueFromArrayOfObjects(object, 'val');
        this.maxValue = Utils.getMaxValueFromArrayOfObjects(object, 'val');
    }
}