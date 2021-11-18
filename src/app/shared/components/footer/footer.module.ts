import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material/material.module';

import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FooterComponent
  ],
})
export class FooterModule { }
