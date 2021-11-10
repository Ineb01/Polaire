import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GettokenService } from './gettoken.service';
import { FormResponse } from './models/FormModules/FormResponse';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  companies_url:string = "/api/profiles/profiles/";
  base_url:string = "http://localhost";

  tokenService:GettokenService;

  constructor(private client: HttpClient, tokenService:GettokenService) {
    this.tokenService = tokenService;
  }

  makeFormComapies():Observable<FormResponse>{

    const token = this.tokenService.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization : "JWT " + token
      })
    }

    return this.client.options<FormResponse>(this.base_url+this.companies_url, httpOptions);
  }  
}
