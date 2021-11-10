import { Choice } from "./Choice";

export class FormValue{

    name: string;
    type: string;
    required: boolean;
    read_only: boolean;
    label: string;
    children: JSON;
    choices: Choice[];
    childrenArray:FormValue[];


    constructor(name:string, type: string, required: boolean, read_only:boolean, label: string, children: JSON, choices: Choice[],childrenArray:FormValue[]){
        this.name = name;
        this.type = type;
        this.required = required;
        this.read_only = read_only;
        this.label = label;
        this.children = children;
        this.choices = choices;
        this.childrenArray = childrenArray;
    }
}