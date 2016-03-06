import IHttpPromise = angular.IHttpPromise;
export class HomeService {
    private http:ng.IHttpService;
    private log:ng.ILogService;

    constructor($http, $log){
        "ngInject";
        this.http = $http;
        this.log = $log;
    }

    public getData() : any {
        return {
            message: "Hello World !"
        }
    }
}