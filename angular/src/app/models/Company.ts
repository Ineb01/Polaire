import { Address } from "./Address";

export interface Company{
    id: number;
    address: Address;
    worker: Worker;
    company_type: String;
    logo: String;
    name: String;
    phone: String;
    mail: String;
    business: String;
    validated: Boolean;
    link_social_media: String;
}