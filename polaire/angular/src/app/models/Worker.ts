export class Worker{

    firstname: String;
    lastname: String;
    title: String;
    phone: String;
    mail: String;

    constructor(firstName: String, lasName:String, title:String, phone:String, mail:String){
        this.firstname = firstName;
        this.lastname = lasName;
        this.mail = mail;
        this.phone = phone;
        this.title = title;
    }
}