import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material/material.module';

import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    HeaderComponent
  ],
})
export class HeaderModule { }
