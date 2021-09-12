import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenValue } from './models/TokenValue'

@Injectable({
  providedIn: 'root'
})

export class GettokenService {

  auth_url:string = "/api-token-auth/";
  base_url:string = "";

  private token!:TokenValue;

  constructor(private client: HttpClient, private route: Router) {
  }

  logout(){
    this.token = new TokenValue("");
    localStorage.clear();
  }

  login(username:string, password:string){
    this.client.post<TokenValue>(this.base_url+this.auth_url,{"username": username, "password": password})
      .subscribe(
      data => {
        this.token = data;
        this.saveTokenToLocalStorage(this.token.token);
        this.route.navigate(['/..']);
      },
      error => {
        this.changeLoginPage();
      }
    )              
  }

  private changeLoginPage(){
    let loginInfo = <HTMLElement>document.getElementById("loginInformation");
    loginInfo.innerHTML = "Username or Password are invalid";

    let usernameInput = document.getElementById("username");
    usernameInput?.classList.add("is-invalid");

    let passwordInput = document.getElementById("password");
    passwordInput?.classList.add("is-invalid");
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
