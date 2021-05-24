import { Company } from './models/Company';
import { Filter } from './models/Filter'
import { Injectable } from '@angular/core';
import { Filterable } from './models/Filterable';
import companies from '../assets/companies.json';
import { City } from './models/City';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private companiesIntern:Company[];
  companiesExtern: Company[];
  countries: String[];
  cities: City[];
  filters: Filter[];
  filterCountry: Filter;
  cityFilter: Filter[];
  countryFilterActive: Boolean;

  constructor() {
    this.companiesIntern = companies;
    this.changeCities();
    this.companiesExtern = this.companiesIntern;
    this.filters = [];
    this.countries = [];
    this.cities = [];
    this.filterCountry = {type: Filterable.country, value:"default", multi:false};
    this.countryFilterActive = false;
    this.cityFilter = [];
    this.setCountries();
    this.setCities();
  }

  addFilter(newFilter: Filter){
    //change for Filterlist
    //check if filter is already used
    let usedfilter: boolean = false;
    this.filters.forEach(function(filter) {
      if(filter.value === newFilter.value)usedfilter = true;
    });
    if(usedfilter)return;
    if(!newFilter.multi){
      this.filters = this.filters.filter(filter => filter.type != newFilter.type);
    }
    this.filters.push(newFilter);
    //change on extern list
    if(newFilter.type === Filterable.country){
      this.countryFilterActive = true;
      this.filterCountry = newFilter;
    }
    if(newFilter.type === Filterable.city){
      this.cityFilter.push(newFilter);
    }
    this.filter();
  }

  removeFilter(filterToRemove: Filter){
    //change only for Filterlist
    this.filters = this.filters.filter(filter=> filter.value != filterToRemove.value);
    if(filterToRemove.type === Filterable.country){
      this.countryFilterActive = false;
    }
    if(filterToRemove.type === Filterable.city){
      this.cityFilter = this.cityFilter.filter(filter => filterToRemove.value != filter.value);
    }
    this.filter();
  }

  filter(){
    this.companiesExtern = this.companiesIntern;
    this.setCities();
    if(this.countryFilterActive){
      this.companiesExtern = this.companiesExtern.filter(company => company.address.country === this.filterCountry.value);
      this.filterCities();
    }
    if(this.cityFilter.length > 0){
      this.companiesExtern = this.companiesExtern.filter(company => {
        let validCity:boolean = false;
        this.cityFilter.forEach(function (filter) {
          if(filter.value.name === company.address.City) validCity = true;
        })
        return validCity;
      })
    }
  }

  changeCities(){
    this.companiesIntern.forEach( (Company)=>{
      Company.SetCity = {country: Company.address.country, name: Company.address.City}
    })
  }

  setCountries(){
    this.companiesIntern.forEach( (Company) =>{
      let existing: boolean = this.existingCountry(Company.address.country);
      if(!existing) this.countries.push(Company.address.country);
    })
  }

  setCities(){
    this.companiesIntern.forEach( (Company) =>{
      let existing: boolean = this.existingCity(Company.SetCity);
      if(!existing) this.cities.push(Company.SetCity);
    })
  }

  filterCities(){
    this.cities = this.cities.filter(city => city.country === this.filterCountry.value);
  }

  existingCountry(country:String): boolean{
    for(let countryInList of this.countries){
      if(country === countryInList) return true;
    }
    return false;
  }

  existingCity(city: City): boolean{
    for(let cityInList of this.cities){
      if(city === cityInList) return true;
    }
    return false;
  }
  
  getCounties(){
    return this.countries;
  }

  getCompanies(){
    return this.companiesExtern;
  }
}
