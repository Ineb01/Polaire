import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../models/Content';

@Component({
  selector: 'app-collagemodule',
  templateUrl: './collagemodule.component.html',
  styleUrls: ['./collagemodule.component.scss']
})
export class CollagemoduleComponent implements OnInit {

  @Input() content!:Content;

  constructor() { }

  ngOnInit(): void {
  }

}
