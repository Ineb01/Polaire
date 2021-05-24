import { Content } from "./Content";

export class Module{

    type: String;
    content: Content;

    constructor(type:String, content:Content){
        this.type = type;
        this.content = content;
    }
}