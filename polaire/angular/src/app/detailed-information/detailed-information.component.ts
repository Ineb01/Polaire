import { DetailedDatabaseService } from './../detailed-database.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailedCompany } from '../models/DetailedCompany';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  company!: DetailedCompany;

  @Input() test!:String;

  constructor(private route: ActivatedRoute, DetailedDatabaseService: DetailedDatabaseService) {
    DetailedDatabaseService.getDetailedCompany(this.route.snapshot.params['id']).subscribe(data => this.company = data);
    window.scroll(0,0);
  }

  ngOnInit(): void {
    console.log(this.company);
  }

}

