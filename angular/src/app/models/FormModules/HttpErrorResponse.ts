export class HttpErrorResponse{

    error:JSON;

    constructor(error:JSON){
        this.error = error;
    }
}