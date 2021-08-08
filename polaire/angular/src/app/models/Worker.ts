export class Worker {

    id: Number;
    title_first: String;
    first_name: String;
    last_name: String;
    title_last: String;
    sex: CharacterData;
    picture: String;
    phone: String;
    mail: String;
    company: Number;

    constructor(id: Number, title_first: String, first_name: String, last_name: String, title_last: String, sex: CharacterData, picture: String, phone: String, mail: String, company: Number) {
        this.id = id;
        this.title_first = title_first;
        this.first_name = first_name;
        this.last_name = last_name;
        this.title_last = title_last;
        this.sex = sex;
        this.picture = picture;
        this.mail = mail;
        this.phone = phone;
        this.company = company;
    }
}