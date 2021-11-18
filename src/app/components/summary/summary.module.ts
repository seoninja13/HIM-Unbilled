import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { MaterialModule } from '../../shared/material/material.module';
import { FilterModule } from '../../shared//components/filter/filter.module';

// import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
// import { MatPaginatorModule } from '@angular/material/paginator';


import { SummaryComponent } from './summary.component';


@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    FilterModule
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule
  ]
})
export class SummaryModule { }