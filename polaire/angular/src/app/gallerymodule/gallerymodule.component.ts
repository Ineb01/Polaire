import { Content } from '../models/Content';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallerymodule',
  templateUrl: './gallerymodule.component.html',
  styleUrls: ['./gallerymodule.component.scss']
})
export class GallerymoduleComponent implements OnInit {

  @Input() content!: Content;
  indexPic: number;
  picsWithoutFirst!: String[];

  constructor() {
    this.indexPic = 0;
  }

  ngOnInit(): void {
    this.picsWithoutFirst = this.content.pictures.slice(1, this.content.pictures.length);
  }
}
