export class Address{
    id:Number;
    street:String;
    house: String;
    city: String
    state: String;
    country: String;
    company:Number;

    constructor(id: Number, street: String, house: String, city: String, state: String, country: String, company:Number){
        this.id = id;
        this.street = street;
        this.house = house;
        this.city = city;
        this.state = state;
        this.country = country;
        this.company = company;
    }

}