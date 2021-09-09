import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    var name = (<HTMLInputElement>document.getElementById("companyName")).value;
    if(name.length < 1) this.addClassInvalid("companyName");

    var phoneNumber = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    if(phoneNumber.length < 6) this.addClassInvalid("phoneNumber");

    var mail = (<HTMLInputElement>document.getElementById("mail")).value;
    if(mail.length < 6) this.addClassInvalid("mail");

    var business = (<HTMLInputElement>document.getElementById("business")).value;
    if(business.length < 4) this.addClassInvalid("business");

    var street = (<HTMLInputElement>document.getElementById("street")).value;
    if(street.length < 1) this.addClassInvalid("street");

    var house = (<HTMLInputElement>document.getElementById("house")).value;
    if(house.length < 4) this.addClassInvalid("house");

    var city = (<HTMLInputElement>document.getElementById("city")).value;
    if(city.length < 4) this.addClassInvalid("city");

    var state = (<HTMLInputElement>document.getElementById("state")).value;
    if(state.length < 4) this.addClassInvalid("state");

    var country = (<HTMLInputElement>document.getElementById("country")).value;
    if(country.length < 4) this.addClassInvalid("country");

    var firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    if(firstName.length < 4) this.addClassInvalid("firstName");

    var lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    if(lastName.length < 4) this.addClassInvalid("lastName");

    var phoneWorker = (<HTMLInputElement>document.getElementById("phoneWorker")).value;
    if(phoneWorker.length < 4) this.addClassInvalid("phoneWorker");

    var mailWorker = (<HTMLInputElement>document.getElementById("mailWorker")).value;
    if(mailWorker.length < 4) this.addClassInvalid("mailWorker");
  }

  addClassInvalid(id:string){
    var element = document.getElementById(id)!;
    element.classList.add("is-invalid");
  }
}
