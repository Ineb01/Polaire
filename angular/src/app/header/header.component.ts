
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GettokenService } from '../gettoken.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private GettokenService: GettokenService;

  constructor(GettokenService: GettokenService, private route:Router) { 
    this.GettokenService = GettokenService;
  }

  ngOnInit(): void {
  }

  logOut(){
    this.GettokenService.logout();
  }

  logIn(){
    this.route.navigate(['/', 'login'])
  }

}
