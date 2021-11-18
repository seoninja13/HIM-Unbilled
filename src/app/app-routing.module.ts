import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { StatusComponent } from './components/status/status.component';
import { AccountListComponent } from './components/account-list/account-list.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'table-basic', component: TableBasicComponent },
  { path: 'account-list', component: AccountListComponent },
  { path: 'status', component: StatusComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
