import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DatabaseService } from '../database.service';
import { FileInfoService } from '../fileInfo.service';
import { GettokenService } from '../gettoken.service';
import { FileUpload } from '../models/FileUpload';
import { FormValue } from '../models/FormModules/FormValue';

@Component({
  selector: 'app-formvalue',
  templateUrl: './formvalue.component.html',
  styleUrls: ['./formvalue.component.scss']
})
export class FormvalueComponent implements OnInit {

  @Input() formValue!: FormValue;
  database:DatabaseService;
  fileInfo:FileInfoService;
  isErrorMessage:Boolean;
  errorMessage:string;

  constructor(fileInfo:FileInfoService, database:DatabaseService) { 
    this.database = database;
    this.fileInfo = fileInfo;
    this.isErrorMessage = false;
    this.errorMessage = "test error";
  }

  ngOnInit(): void {
    if(this.formValue.type == "nested object") this.setChildren();
  }

  setChildren(){
    this.formValue.childrenArray = Object.values(this.formValue.children);
    this.setChildrenNames();
  }

  setChildrenNames(){
    var j:number = 0;
    for(var i in this.formValue.children){
      this.formValue.childrenArray[j].name = i;
      j++;
    }
  }

  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {
      this.database.uploadFile(file, file.name, "api/images/images/").subscribe(
        data=>{
          var id;
          var counter = 0;
          for(let i in data){
            if(i=="pk")id = Object.values(data)[counter];
            counter ++;
          }
          this.fileInfo.addFileUpload(new FileUpload(this.formValue.name, id))
        },
        error=>{
          var counter = 0;
          for(let i in error){
            if(i=="statusText") this.markErrorField((Object.values(error)[counter]));
            counter++;
          }
        }
      )
    }
  }
  
  markErrorField(errorMessage:any){
    var element = <HTMLInputElement>document.getElementById(this.formValue.name)!;
    element.classList.add("is-invalid");
    this.isErrorMessage = false;
    this.errorMessage = errorMessage;
  }
}