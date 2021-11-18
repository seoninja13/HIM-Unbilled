import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material/material.module';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MaintenanceComponent } from './maintenance.component';


@NgModule({
  declarations: [MaintenanceComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatIconModule,
    // MatButtonModule,
    // MatProgressSpinnerModule
  ]
})
export class MaintenanceModule { }
