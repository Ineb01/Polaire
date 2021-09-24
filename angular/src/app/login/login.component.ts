import { Component, OnInit } from '@angular/core';
import { GettokenService } from '../gettoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  GettockenService: GettokenService;

  constructor(GettokenService: GettokenService) {
    this.GettockenService = GettokenService;
   }

  ngOnInit(): void {
  }

  login(){
    var username:string = (<HTMLInputElement>document.getElementById("username")).value;
    var password:string = (<HTMLInputElement>document.getElementById("password")).value;
    
    this.GettockenService.login(username, password);
  }
}
