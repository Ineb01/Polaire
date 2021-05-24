import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Module } from '../models/Module';

@Component({
  selector: 'app-textmodule',
  templateUrl: './textmodule.component.html',
  styleUrls: ['./textmodule.component.scss']
})
export class TextmoduleComponent implements OnInit {

  @Input() module!: Module;

  constructor() { }

  ngOnInit(): void {
  }

}
