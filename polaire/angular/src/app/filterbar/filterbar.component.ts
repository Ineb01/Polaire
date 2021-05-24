import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../models/Filter';
import { Filterable } from '../models/Filterable';
import { DatabaseService } from './../database.service';
import { City } from '../models/City';


@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit {

  countryList: String[];
  cityList: City[];
  filters: Filter[];
  DatabaseService: DatabaseService;
  city: Filterable;

  constructor(DatabaseService: DatabaseService) {
    this.countryList = DatabaseService.countries;
    this.DatabaseService = DatabaseService;
    this.filters = DatabaseService.filters;
    this.cityList = DatabaseService.cities;
    this.city = Filterable.city;
  }

  ngOnInit(): void {
  }

  addCountryFilter(value:String){
    let filter: Filter = {type: Filterable.country, value, multi: false};
    this.DatabaseService.addFilter(filter);
    this.filters = this.DatabaseService.filters;
    this.cityList = this.DatabaseService.cities;
  }

  addCityFilter(value: City){
    let filter: Filter = {type: Filterable.city, value: value, multi: true};
    this.DatabaseService.addFilter(filter);
    this.filters = this.DatabaseService.filters;
  }

  removeFilter(filter:Filter){
    this.DatabaseService.removeFilter(filter);
    this.filters = this.DatabaseService.filters;
    this.cityList = this.DatabaseService.cities;
  }

}
