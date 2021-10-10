import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../models/Content';

@Component({
  selector: 'app-textmodule',
  templateUrl: './textmodule.component.html',
  styleUrls: ['./textmodule.component.scss']
})
export class TextmoduleComponent implements OnInit {

  @Input() content!: Content;

  constructor() {
   }

  ngOnInit(): void {
  }

}
