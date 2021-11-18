import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api/api.service';
// import { ReportPageModel } from '../report/report.model';
// import * as _ from 'lodash';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})


// export class ReportComponent implements OnInit, OnDestroy {
export class ReportComponent implements OnInit {

  displayedColumns = [
    'txtUnitName',
    'billingBal',
    'balanceSum',
    'grandBal',
    'total_Post_Final_Bill_Unbilled_AR_Days',
    'nfD_Unbilled_AR_Days',
    'fD_Unbilled_AR_Days',
    'grand_Total_Unbilled_AR_Days',
    'avgUnbilledARDays'
  ];


  reportPageData: any; // WORKS
  // reportPageData = new ReportPageModel(); // IS THIS NEEDED? Because the Subscription already is Successfully using the ReportPageModel. This Class w/ Interfaces DOESN'T WORK in the HTML for Looping, etc???
  // reportPageModel: ReportPageModel;
  reportPageSubscription = new Subscription();

  typeOfSpinner = 'loading;'
  progressSpinnerSubscription = new Subscription();


  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    console.log('HIT- report.component- ngOnInit')

    this.progressSpinnerSubscription = this.apiService.progressSpinnerObservable.subscribe((response: string) => {
      this.typeOfSpinner = response;
    });


    this.apiService.getHomePageDefaultGridData();
    this.reportPageSubscription = this.apiService.reportModelObservable.subscribe((response: any) => {
      console.log('report.component- ngOnInit- this.apiService.reportModelObservable.subscribe(response = ', response);

      this.reportPageData = response;
      console.log('report.component- ngOnInit- this.reportPageData = ', this.reportPageData);
    });

  }


  ngOnDestroy(): void {
    this.reportPageSubscription.unsubscribe();
    this.progressSpinnerSubscription.unsubscribe();
  }


}
