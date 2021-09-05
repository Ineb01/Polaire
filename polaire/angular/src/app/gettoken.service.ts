import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GettokenService {

  token:string;
  isLoggedIn: boolean;

  constructor(private client: HttpClient) {
    this.token = "";
    this.isLoggedIn = false;
  }

  login(username:string, password:string){
    console.log(username);
    console.log(password);
    //Make the post request and safe the token
    this.client.post<any>('http://127.0.0.1:8000/api-token-auth/',{"username": username, "password": password}).subscribe(data => {
      this.token = data.toString(); 
    })
    console.log(this.token);
    this.isLoggedIn = true;
  }

  getToken():string{
    if(!this.isLoggedIn) return "";
    else return this.token;
  }
}
