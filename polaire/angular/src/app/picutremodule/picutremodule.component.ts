import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Module } from '../models/Module';

@Component({
  selector: 'app-picutremodule',
  templateUrl: './picutremodule.component.html',
  styleUrls: ['./picutremodule.component.scss']
})
export class PicutremoduleComponent implements OnInit {

  @Input() module!: Module;

  constructor() { }

  ngOnInit(): void {
  }

  zoom(){
    (<HTMLInputElement>document.getElementById("picModule")).style.width = "650px";
  }

  resetzoom(){
    (<HTMLInputElement>document.getElementById("picModule")).style.width = "600px";
  }

}
