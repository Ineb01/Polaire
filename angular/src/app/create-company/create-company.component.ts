import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

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
    else this.removeClassInvalid("companyName");

    var phoneNumber = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    if(phoneNumber.length < 6 || !this.onlyNumbers(phoneNumber.substring(1))) this.addClassInvalid("phoneNumber");
    else this.removeClassInvalid("phoneNumber");

    var mail = (<HTMLInputElement>document.getElementById("mail")).value;
    if(mail.length < 6 || !this.validEmail(mail)) this.addClassInvalid("mail");
    else this.removeClassInvalid("mail");

    var business = (<HTMLInputElement>document.getElementById("business")).value;
    if(business.length < 4) this.addClassInvalid("business");
    else this.removeClassInvalid("business");

    var logoLink = (<HTMLInputElement>document.getElementById("logoLink")).value;
    if(logoLink.length < 6) this.addClassInvalid("logoLink");
    else this.removeClassInvalid("logoLink");

    var street = (<HTMLInputElement>document.getElementById("street")).value;
    if(street.length < 1) this.addClassInvalid("street");
    else this.removeClassInvalid("street");

    var house = (<HTMLInputElement>document.getElementById("house")).value;
    if(house.length < 4) this.addClassInvalid("house");
    else this.removeClassInvalid("house");

    var city = (<HTMLInputElement>document.getElementById("city")).value;
    if(city.length < 4) this.addClassInvalid("city");
    else this.removeClassInvalid("city");

    var country = (<HTMLInputElement>document.getElementById("country")).value;
    if(country.length < 4) this.addClassInvalid("country");
    else this.removeClassInvalid("country");

    var zipcode =(<HTMLInputElement>document.getElementById("zipcode")).value;
    if(zipcode.length < 4 || zipcode.length > 5 || !this.onlyNumbers(zipcode)) this.addClassInvalid("zipcode");
    else this.removeClassInvalid("zipcode");
  }

  addClassInvalid(id:string){
    var element = <HTMLInputElement>document.getElementById(id)!;
    element.classList.add("is-invalid");
    element.value = '';
  }

  removeClassInvalid(id:string){
    var element = document.getElementById(id)!;
    element.classList.replace("is-invalid", "is-valid");
    element.classList.add("is-valid");
  }

  validEmail(email:string):boolean{
    for(let i = 0; i < email.length; i++){
      if(email.charAt(i) == '@') return true;
    }
    return false;
  }

  onlyNumbers(input:String):boolean{
    for(let i = 0; i < input.length; i++){
      if(input.charCodeAt(i) < 48 || input.charCodeAt(i) > 57) return false;
    }
    return true;
  }
}
