import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FileInfoService } from '../fileInfo.service';
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
  fileInfo:FileInfoService;
  DatabaseService: DatabaseService;
  client: HttpClient;
  private url:String = "http://localhost/api/";

  constructor(FromService: FormService, DatabaseService:DatabaseService, client: HttpClient, fileInfo:FileInfoService) { 
    this.FromService = FromService;
    this.DatabaseService = DatabaseService;
    this.client = client;
    this.fileInfo = fileInfo;
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
        console.log(error);
        var errorFields:string[] = this.getErrorFields(error);
        this.addInvalidClasses(errorFields);
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
    if(value.length < 1 && (val.required)){
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
        if(val.childrenArray[j].type == "image upload"){
          if(!this.correctFile(val.childrenArray[j])) validData = false;
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

  correctFile(val:FormValue):boolean{
    var result = this.fileInfo.getFileUpload(val.name);
    if(result == "no data"){
      console.log("no file was uploaded");
      return false;
    }
    return true;
  }

  writeFile(val: FormValue, i: number, data:string):string{
    if(i > 0) data += `,`;
    data += `"${val.name}": "${this.fileInfo.getFileUpload(val.name)}"`;
    return data;
  }

  getRightValue(formValue: FormValue, displayName: string):string{
    for(let i = 0; i < formValue.choices.length; i++){
      if(formValue.choices[i].display_name == displayName) return formValue.choices[i].value;
    }
    return "error";
  }

  addClassInvalid(id:string){
    try{
      var element = <HTMLInputElement>document.getElementById(id)!;
      element.classList.add("is-invalid");
      element.value = '';
    } catch (error){}
    
  }

  removeClassInvalid(id:string){
    var element = document.getElementById(id)!;
    element.classList.replace("is-invalid", "is-valid");
    element.classList.add("is-valid");
  }
  
  addInvalidClasses(errorFields:string[]){
    for(var i = 0; i < errorFields.length; i++){
      this.addClassInvalid(errorFields[i]);
    }
  }

  getErrorFields(errorResult:any):string[]{
    var errorNames: string[] = [];
    var errors:Error[] = Object.values(errorResult.error);
    var counter = 0;
    for(var i in errorResult.error){
      if(Array.isArray(errors[counter])){
        errorNames.push(i);
      } else {
        errorNames = this.addValues(errors[counter], errorNames);
      }
      counter++;
    }
    return errorNames;
  }

  addValues(error: Error, errorName: string[]):string[]{
    for(let i in error){
      errorName.push(i);
    }
    return errorName;
  }

  uploadFileFunction(){
    console.log("test");
  }

}
