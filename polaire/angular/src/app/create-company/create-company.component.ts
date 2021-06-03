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
    if(name.length < 1) this.addClassInbvlid("companyName");

    var phoneNumber = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    if(phoneNumber.length < 6) this.addClassInbvlid("phoneNumber");

    var mail = (<HTMLInputElement>document.getElementById("mail")).value;
    if(mail.length < 6) this.addClassInbvlid("mail");

    var business = (<HTMLInputElement>document.getElementById("business")).value;
    if(business.length < 4) this.addClassInbvlid("business");

    var street = (<HTMLInputElement>document.getElementById("street")).value;
    if(street.length < 1) this.addClassInbvlid("street");

    var house = (<HTMLInputElement>document.getElementById("house")).value;
    if(house.length < 4) this.addClassInbvlid("house");

    var city = (<HTMLInputElement>document.getElementById("city")).value;
    if(city.length < 4) this.addClassInbvlid("city");

    var state = (<HTMLInputElement>document.getElementById("state")).value;
    if(state.length < 4) this.addClassInbvlid("state");

    var country = (<HTMLInputElement>document.getElementById("country")).value;
    if(country.length < 4) this.addClassInbvlid("country");

    var firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    if(firstName.length < 4) this.addClassInbvlid("firstName");

    var lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    if(lastName.length < 4) this.addClassInbvlid("lastName");

    var phoneWorker = (<HTMLInputElement>document.getElementById("phoneWorker")).value;
    if(phoneWorker.length < 4) this.addClassInbvlid("phoneWorker");

    var mailWorker = (<HTMLInputElement>document.getElementById("mailWorker")).value;
    if(mailWorker.length < 4) this.addClassInbvlid("mailWorker");
  }

  addClassInbvlid(id:string){
    var element = document.getElementById(id)!;
    element.classList.add("is-invalid");
  }
}
