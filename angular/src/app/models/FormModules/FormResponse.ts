import { POST } from "./POST";

export class FormResponse{

    name:string;
    actions: POST;

    constructor(name: string, actions: POST){
        this.name = name;
        this.actions = actions;
    }
}