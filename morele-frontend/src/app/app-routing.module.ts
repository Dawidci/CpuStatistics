import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuListComponent} from "./components/cpu-list/cpu-list.component";
import {CpuDetailsComponent} from "./components/cpu-details/cpu-details.component";
import {CompanyDetailsComponent} from "./components/company-details/company-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'cpus', pathMatch: 'full'},

  { path: 'cpus', component: CpuListComponent },
  { path: 'cpus/details/:id', component: CpuDetailsComponent},
  { path: 'cpus/companies', component: CompanyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
