import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpuListComponent } from './components/cpu-list/cpu-list.component';
import { CpuDetailsComponent } from './components/cpu-details/cpu-details.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CpuListComponent,
    CpuDetailsComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
