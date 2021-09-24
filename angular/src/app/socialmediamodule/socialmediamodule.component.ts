import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../models/Content';

@Component({
  selector: 'app-socialmediamodule',
  templateUrl: './socialmediamodule.component.html',
  styleUrls: ['./socialmediamodule.component.scss']
})
export class SocialmediamoduleComponent implements OnInit {

  @Input() content!: Content;

  constructor() { }

  ngOnInit(): void {
  }

}
