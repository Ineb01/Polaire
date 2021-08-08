
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DetailedCompany } from './models/DetailedCompany';

@Injectable({
  providedIn: 'root'
})
export class DetailedDatabaseService {

  companies_url:string = "/profiles/profiles";

  constructor(private client: HttpClient) {
  }

  getDetailedCompany(index:number):Observable<DetailedCompany> {
    return this.client.get<DetailedCompany>(this.companies_url+'/'+index);
  }
}