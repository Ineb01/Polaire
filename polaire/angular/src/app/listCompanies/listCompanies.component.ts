import { DatabaseService } from './../database.service';
import { Company } from '../models/Company';
import { Component, NgZone, OnChanges, OnInit, SimpleChanges, ɵRender3NgModuleRef } from '@angular/core';

@Component({
  selector: 'app-list-companies',
  templateUrl: './listCompanies.component.html',
  styleUrls: ['./listCompanies.component.css']
})
export class ListCompaniesComponent implements OnInit {

  companyList: Company[];
  DatabaseService: DatabaseService;

  constructor(DatabaseService: DatabaseService) {
    this.companyList = DatabaseService.companiesExtern;
    this.DatabaseService = DatabaseService;
  }

  ngOnInit(): void {
  }

  rerender(){
    this.companyList = this.DatabaseService.companiesExtern;
  }
}
