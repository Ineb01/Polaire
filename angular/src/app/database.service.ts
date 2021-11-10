import { Company } from './models/Company';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GettokenService } from './gettoken.service';
import {Data, Router} from '@angular/router'; 
import { DetailedCompany } from './models/DetailedCompany';
import { Module } from './models/Module';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  companies_url:string = "/api/profiles/profiles/";
  modules_url:string = "/api/profiles/modules/";
  base_url:string = "http://localhost";
  tokenService:GettokenService;

  constructor(private client: HttpClient, tokenService:GettokenService, private route:Router) {
    this.tokenService = tokenService;
  }

  getCompanies():Observable<Company[]>{ 

    const token = this.tokenService.getToken();
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization : "JWT " + token
      })
    };

    this.client.get<Company[]>(this.base_url+this.companies_url, httpOptions)
      .subscribe(
        data => {
        }
        ,error => {
          this.route.navigate(['/', 'login'])
        }
      )

    return this.client.get<Company[]>(this.base_url+this.companies_url, httpOptions);
  }

  getDetailedCompany(id:number):Observable<DetailedCompany>{

    const token = this.tokenService.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization : "JWT " + token
      })
    };

    return this.client.get<DetailedCompany>(this.base_url+this.companies_url + id +'/', httpOptions)
  }

  getModules(id:number):Observable<Module[]>{

    const token = this.tokenService.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization : "JWT " + token
      })
    };

    return this.client.get<Module[]>(this.base_url + this.modules_url + id + '/', httpOptions);
  }

  makePost(body:string, url:string):Observable<string>{

    const token = this.tokenService.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization' : "JWT " + token,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      })
    };

    return this.client.post<string>(url, body, httpOptions);
  }
}
