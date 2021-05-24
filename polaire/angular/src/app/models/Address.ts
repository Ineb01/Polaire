import { City } from './City';
export class Address{
    street:String;
    house: String;
    City: String
    Country: String;
    country: String;

    constructor(street: String, house: String, City: String, Country: String, country: String){
        this.street = street;
        this.house = house;
        this.Country = Country;
        this.country = country;
        this.City = City;
    }

}