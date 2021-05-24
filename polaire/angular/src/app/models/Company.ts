import { Address } from "./Address";
import { City } from "./City";

export class Company{
    id: number;
    name: string;
    phone: string;
    mail: string;
    address: Address;
    profilPicURL: string;
    SetCity: City;

    constructor(id: number, name: string, phone: string, mail: string, address: Address, profilpicURL: string, SetCity: City){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.mail = mail;
        this.address = address;
        this.profilPicURL = profilpicURL;
        this.SetCity = SetCity;
    }
}