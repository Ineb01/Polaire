export class Error{

    message: string;
    name:string;
    children:Error[];

    constructor(message:string, name:string, children:Error[]){
        this.message = message;
        this.name = name;
        this.children = children;
    }
}