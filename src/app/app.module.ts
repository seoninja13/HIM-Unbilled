import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './shared/components/header/header.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { MaintenanceModule } from './components/maintenance/maintenance.module';
import { StatusModule } from './components/status/status.module';
import { TableBasicModule } from './components/table-basic/table-basic.module';

import { ReportComponent } from './report/report.component';
import { AccountListComponent } from './components/account-list/account-list.component';

// import { APP_INITIALIZER } from '@angular/core';
// import { AppConfig } from './app.config';
// import { MsalModule, MsalInterceptor } from '@azure/msal-angular';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    MaintenanceModule,
    StatusModule,
    TableBasicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
