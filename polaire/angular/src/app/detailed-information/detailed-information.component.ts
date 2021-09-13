import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DatabaseService } from '../database.service';
import { DetailedCompany } from '../models/DetailedCompany';
import { Module } from '../models/Module';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  company!: DetailedCompany;
  modules!: Module[];

  @Input() test!:String;

  constructor(private route: ActivatedRoute, DatabaseService: DatabaseService) {

    DatabaseService.getDetailedCompany(this.route.snapshot.params['id']).subscribe(data => this.company = data);
    DatabaseService.getModules(this.route.snapshot.params['id']).subscribe(data => this.modules = data);
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }
}

