import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../models/Filter';
import { Filterable } from '../models/Filterable';
import { DatabaseService } from './../database.service';


@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit {

  countryList!: String[];
  filters!: Filter[];
  DatabaseService!: DatabaseService;
  city!: Filterable;

  constructor(DatabaseService: DatabaseService) {
  }

  ngOnInit(): void {
  }

}
