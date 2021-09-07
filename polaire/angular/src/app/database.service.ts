import { Company } from './models/Company';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GettokenService } from './gettoken.service';
import {Router} from '@angular/router'; 
import { newArray } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  companies_url:string = "/profiles/profiles";
  tokenService:GettokenService;

  constructor(private client: HttpClient, tokenService:GettokenService, private route:Router) {
    this.tokenService = tokenService;
  }

  getCompanies():Company[] {

    const token = this.tokenService.getToken();
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization : "JWT " + token
      })
    };

    var profiles:Company[] = [];

    this.client.get<Company[]>("http://127.0.0.1:8000/profiles/profiles", httpOptions)
      .subscribe(
        request => {
          profiles = request;
          console.log("profiles: " + request);
        },
        error => {
          this.route.navigate(['/', 'login'])
        }
      )
    return profiles;
    //return this.client.get<Company[]>("http://127.0.0.1:8000/profiles/profiles", httpOptions);
  }
}
