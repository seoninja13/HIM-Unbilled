import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { MaterialModule } from '../../shared/material/material.module';
import { FilterModule } from '../../shared//components/filter/filter.module';
import { SummaryModule } from '../summary/summary.module';

// import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
// import { MatPaginatorModule } from '@angular/material/paginator';


import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    FilterModule,
    SummaryModule
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule
  ]
})
export class HomeModule { }
