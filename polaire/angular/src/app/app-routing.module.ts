import { DatabaseService } from './database.service';
import { ListCompaniesComponent } from './listCompanies/listCompanies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInformationComponent } from './detailed-information/detailed-information.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { LoginComponent } from './login/login.component';


DatabaseService.name;

const routes:Routes = [
  {path: '', component: ListCompaniesComponent },
  {path: 'details/:id', component: DetailedInformationComponent},
  {path: 'newaccount', component: CreateCompanyComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
