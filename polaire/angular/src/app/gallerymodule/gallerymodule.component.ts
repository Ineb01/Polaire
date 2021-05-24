import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Module } from '../models/Module';

@Component({
  selector: 'app-gallerymodule',
  templateUrl: './gallerymodule.component.html',
  styleUrls: ['./gallerymodule.component.scss']
})
export class GallerymoduleComponent implements OnInit {

  @Input() module!: Module;
  indexPic: number;
  picsWithoutFirst!: String[];

  constructor() {
    this.indexPic = 0;
   }

  ngOnInit(): void {
    this.picsWithoutFirst = this.module.content.pictures.slice(1, this.module.content.pictures.length);
    console.log(this.picsWithoutFirst);
  }
}
