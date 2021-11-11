import { Injectable } from '@angular/core';
import { FileUpload } from './models/FileUpload';

@Injectable({
  providedIn: 'root'
})
export class FileInfoService {

    private fileUploads:FileUpload[];

  constructor() {
      this.fileUploads = [];
  }

  clearUploads(){
      this.fileUploads = [];
  }

  addFileUpload(fileUpload:FileUpload){
    console.log("The ID is " + fileUpload.result);
    for(let i = 0; i < this.fileUploads.length; i++){
        if(this.fileUploads[i].field = fileUpload.field)this.fileUploads.splice(i, 1);
    }
    this.fileUploads.push(fileUpload);
  }

  getFileUpload(field:string):string{
      for(let i = 0; i < this.fileUploads.length; i++){
          if(this.fileUploads[i].field = field) return this.fileUploads[i].result;
      }
      return "no data";
  }
}
