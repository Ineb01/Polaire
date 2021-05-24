import { Injectable } from '@angular/core';
import detailedInformation from '../assets/detailed.json';
import { DetailedCompany } from './models/detailedCompany';

@Injectable({
  providedIn: 'root'
})
export class DetailedDatabaseService {

  detailedCompanies: DetailedCompany[];

  constructor() { 
    this.detailedCompanies = detailedInformation;
  }

  getCompany(index:number){
    return this.detailedCompanies[index-1];
  }
}
