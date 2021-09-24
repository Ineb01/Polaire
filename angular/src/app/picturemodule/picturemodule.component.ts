import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../models/Content';

@Component({
  selector: 'app-picturemodule',
  templateUrl: './picturemodule.component.html',
  styleUrls: ['./picturemodule.component.scss']
})
export class PicturemoduleComponent implements OnInit {

  @Input() content!: Content;

  constructor() {
   }

  ngOnInit(): void {
  }

  zoom(){
    (<HTMLInputElement>document.getElementById("picModule")).style.width = "650px";
  }

  resetzoom(){
    (<HTMLInputElement>document.getElementById("picModule")).style.width = "600px";
  }

}
