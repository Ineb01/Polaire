import { Address } from "./Address";
import { Worker } from "./Worker";
import { Module } from "./Module";

export class DetailedCompany{
    id: number;
    name: string;
    phone: string;
    mail: string;
    address: Address;
    worker: Worker;
    modules: Module[];
    logo: string;
    business: string;

    constructor(id: number, name: string, phone: string, mail: string, address: Address, worker: Worker, modules: Module[], logo: string, business:string){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.mail = mail;
        this.address = address;
        this.worker = worker;
        this.modules = modules;
        this.logo = logo;
        this.business = business;
    }
}