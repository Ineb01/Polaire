import { DatabaseService } from './database.service';
import { Company } from './models/Company';
import { ListCompaniesComponent } from './listCompanies/listCompanies.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInformationComponent } from './detailed-information/detailed-information.component';


DatabaseService.name;

const routes:Routes = [
  {path: '', component: ListCompaniesComponent },
  {path: 'details/:id', component: DetailedInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
