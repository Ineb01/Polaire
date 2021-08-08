import { Company } from './models/Company';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  companies_url:string = "/profiles/profiles";

  constructor(private client: HttpClient) {
  }

  getCompanies():Observable<Company[]> {
    return this.client.get<Company[]>(this.companies_url);
  }
}
