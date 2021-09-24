import { Identifiers } from "@angular/compiler";
import { Filterable } from "./Filterable";


export class Filter{
    
    type:Filterable;
    value:any;
    multi:Boolean;

    constructor(tpye:Filterable, value:any, multi:Boolean){
        this.type = tpye;
        this.value = value;
        this.multi = multi;
    }
}