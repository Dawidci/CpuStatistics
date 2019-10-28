import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowCpuListComponent} from "./show-cpu-list/show-cpu-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'cpus', pathMatch: 'full' },

  { path: 'cpus', component: ShowCpuListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
