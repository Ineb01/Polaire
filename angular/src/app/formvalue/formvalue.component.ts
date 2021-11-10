import { Component, Input, OnInit } from '@angular/core';
import { FormValue } from '../models/FormModules/FormValue';

@Component({
  selector: 'app-formvalue',
  templateUrl: './formvalue.component.html',
  styleUrls: ['./formvalue.component.scss']
})
export class FormvalueComponent implements OnInit {

  @Input() formValue!: FormValue;

  constructor() { 
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

}
