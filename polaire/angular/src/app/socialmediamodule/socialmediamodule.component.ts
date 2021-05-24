import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Module } from '../models/Module';

@Component({
  selector: 'app-socialmediamodule',
  templateUrl: './socialmediamodule.component.html',
  styleUrls: ['./socialmediamodule.component.scss']
})
export class SocialmediamoduleComponent implements OnInit {

  @Input() module!: Module;

  constructor() { }

  ngOnInit(): void {
  }

}
