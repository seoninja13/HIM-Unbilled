import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material/material.module';

// import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
// import { MatPaginatorModule } from '@angular/material/paginator';


import { StatusComponent } from './status.component';


@NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule
  ]
})
export class StatusModule { }
