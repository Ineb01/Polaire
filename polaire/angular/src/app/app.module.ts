import { RouterModule, Routes } from '@angular/router';
import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCompaniesComponent } from './listCompanies/listCompanies.component';
import { CompanyComponent } from './company/company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { DetailedInformationComponent } from './detailed-information/detailed-information.component';
import { WorkerComponent } from './worker/worker.component';
import { TextmoduleComponent } from './textmodule/textmodule.component';
import { GallerymoduleComponent } from './gallerymodule/gallerymodule.component';
import { PicutremoduleComponent } from './picutremodule/picutremodule.component';
import { SocialmediamoduleComponent } from './socialmediamodule/socialmediamodule.component';
import { CollagemoduleComponent } from './collagemodule/collagemodule.component';
import { ErrorComponent } from './error/error.component';
import { CreateCompanyComponent } from './create-company/create-company.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListCompaniesComponent,
    CompanyComponent,
    FilterbarComponent,
    DetailedInformationComponent,
    WorkerComponent,
    TextmoduleComponent,
    GallerymoduleComponent,
    PicutremoduleComponent,
    SocialmediamoduleComponent,
    CollagemoduleComponent,
    ErrorComponent,
    CreateCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
