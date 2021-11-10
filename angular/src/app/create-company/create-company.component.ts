import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FormService } from '../from.service';
import { Error } from '../models/FormModules/Error';
import { FormValue } from '../models/FormModules/FormValue';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  FromService: FormService;
  formData!: FormValue[];
  DatabaseService: DatabaseService;
  client: HttpClient;
  private url:String = "http://localhost/api/";

  constructor(FromService: FormService, DatabaseService:DatabaseService, client: HttpClient) { 
    this.FromService = FromService;
    this.DatabaseService = DatabaseService;
    this.client = client;
  }

  ngOnInit(): void {
    this.FromService.makeFormComapies().subscribe(
      data => {
        this.formData = Object.values(data.actions.POST);
        this.addNames(data.actions.POST);
      } 
    )
  }

  addNames(form:JSON){
    var j:number = 0;
    for(var i in form){
      this.formData[j].name = i;
      j++;
    }
  }

  submit(){
    var data = this.setData();
    var result = this.DatabaseService.makePost(data, "http://localhost/api/profiles/profiles/");
    result.subscribe(
      data => console.log(data),
      error => {
        var errorResult = error;
        var errorNames: string[] = [];
        var errors:Error[] = Object.values(errorResult.error);

        for(let i = 0; i < errors.length; i++){
          console.log(Object.values(errors[i]));
        }
        /*for(var i in errorResult.error){
          errorNames.push(i);
        }*/
      }
    )
  }

  setData():string{
    var data = `{`;
    var counter = 0;

    for(let i = 0; i < this.formData.length; i++){
      if(!this.formData[i].read_only){
        if(this.formData[i].type == "string"){
          data = this.writeStringIntegerData(this.formData[i], counter, data);
        }
        if(this.formData[i].type == "integer"){
          data = this.writeStringIntegerData(this.formData[i], counter, data);
        }
        if(this.formData[i].type == "choice"){
          data = this.writeChoice(this.formData[i], counter, data);
        }
        if(this.formData[i].type == "nested object"){
          data = this.writeNested(this.formData[i], counter, data);
        }
        if(this.formData[i].type == "file upload"){
          data = this.writeFile(this.formData[i], counter, data);
        }
        counter ++;
      }
    };
    data += `}`;
    return data;
  }

  correctStringData(val:FormValue):boolean{
    var value = (<HTMLInputElement>document.getElementById(val.name)).value;
    if(val.required && (value.length < 1)){
      this.addClassInvalid(val.name);
      return false;
    }
    return true;
  }

  writeStringIntegerData(val : FormValue, i:number, data:string):string{
    var value = (<HTMLInputElement>document.getElementById(val.name)).value;
    if(i > 0) data += `,`;
    data += `"${val.name}": "${value}"`;
    return data;
  }

  correctNumberData(val:FormValue):boolean{
    var value = (<HTMLInputElement>document.getElementById(val.name)).value;
    if(value.length < 1 && (val.required || !this.onlyNumbers(value))){
      this.addClassInvalid(val.name);
      return false;
    }
    return true;
  }

  writeChoice(val: FormValue, i: number, data:string):string{
    var value = (<HTMLInputElement>document.getElementById(val.name)).value;
    if(i > 0) data += `,`;
    value = this.getRightValue(val, value);
    data += `"${val.name}": "${value}"`;
    return data;
  }

  correctNestedData(val:FormValue):boolean{
    var validData = true;
    for(let j = 0; j < val.childrenArray.length; j++){
      if(!val.childrenArray[j].read_only){
        if(val.childrenArray[j].type == "integer"){
          if(!this.correctStringData(val.childrenArray[j])) validData = false; 
        }
        if(val.childrenArray[j].type == "string"){
          if(!this.correctNumberData(val.childrenArray[j])) validData = false; 
        }
        if(val.childrenArray[j].type == "nested object"){
          if(!this.correctNestedData(val.childrenArray[j])) validData = false; 
        }
      }
    }
    return validData;
  }

  writeNested(val: FormValue, i: number, data:string):string{
    if(i > 0) data += `,`;
    data += `"${val.name}": {`
    var counter =0;
    for(let j = 0; j < val.childrenArray.length; j++){
      if(!val.childrenArray[j].read_only){
        if(val.childrenArray[j].type == "integer"|| val.childrenArray[j].type == "string"){
          data = this.writeStringIntegerData(val.childrenArray[j], counter, data);
        }
        if(val.childrenArray[j].type == "choice"){
          data = this.writeChoice(val.childrenArray[j], counter, data);
        }
        if(val.childrenArray[j].type == "nested object"){
          data = this.writeNested(val.childrenArray[j], counter, data);
        }
        if(val.childrenArray[j].type == "image upload"){
          data = this.writeFile(val.childrenArray[j], counter, data);
        }
        counter ++;
      }
    }
    data += `}`
    return data;
  }

  writeFile(val: FormValue, i: number, data:string):string{
    if(i > 0) data += `,`;
    data += `"${val.name}": ""`;
    return data;
  }

  getRightValue(formValue: FormValue, displayName: string):string{
    for(let i = 0; i < formValue.choices.length; i++){
      if(formValue.choices[i].display_name == displayName) return formValue.choices[i].value;
    }
    return "error";
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
