import {HomeService} from "../../services/HomeService";
/**
 * The homepage controller for the app. The controller:
 * - display a <hello world> message
 */
export class HomepageController {
    public helloWorld: string;
    public componentMessage: string;

    constructor(HomeService: HomeService){
        "ngInject";
        this.helloWorld = HomeService.getData().message;
        this.componentMessage = 'Hello';
    }
}