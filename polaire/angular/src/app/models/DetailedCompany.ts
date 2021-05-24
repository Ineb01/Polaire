import { Address } from "./Address";
import { City } from "./City";
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
    profilPicURL: string;
    SetCity: City;

    constructor(id: number, name: string, phone: string, mail: string, address: Address, worker: Worker, modules: Module[], profilpicURL: string, SetCity: City){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.mail = mail;
        this.address = address;
        this.worker = worker;
        this.modules = modules;
        this.profilPicURL = profilpicURL;
        this.SetCity = SetCity;
    }
}