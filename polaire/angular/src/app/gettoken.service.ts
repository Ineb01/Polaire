import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenValue } from './models/TokenValue'

@Injectable({
  providedIn: 'root'
})
export class GettokenService {

  private token!:TokenValue;

  constructor(private client: HttpClient, private route: Router) {
  }

  async login(username:string, password:string){
    this.client.post<TokenValue>('http://127.0.0.1:8000/api-token-auth/',{"username": username, "password": password})
      .subscribe(data => {
        this.token = data;
        this.saveTokenToLocalStorage(this.token.token);
        //TODO open new rout
      }
    )                 
  }

  getToken(){
    return this.getTokenfromLocalStorage();
  }

  private saveTokenToLocalStorage(token: string){
    localStorage.setItem("token", token);
  }

  private getTokenfromLocalStorage(){
    if(localStorage.getItem("token") == null){
      return "";
    } else {
      const value = localStorage!.getItem("token");
      return value;
    }

  }
  
}
