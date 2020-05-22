import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './shared/layout/base/base.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component:  BaseComponent,
  },
  {
    path: 'dashboard',
    component:  DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
