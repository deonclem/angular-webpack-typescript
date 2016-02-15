/**
 * The homepage controller for the app. The controller:
 * - display a <hello world> message
 */
export class HomepageController {
    public helloWorld: string;
    public componentMessage: string;

    constructor(){
        this.helloWorld = 'Hello World !';
        this.componentMessage = 'Hello';
    }
}