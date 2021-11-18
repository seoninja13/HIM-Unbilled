import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { HomePageModel } from '../home/home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

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


  homePageData: any; // WORKS
  // homePageData = new HomePageModel(); // IS THIS NEEDED? Because the Subscription already is Successfully using the HomePageModel. This Class w/ Interfaces DOESN'T WORK in the HTML for Looping, etc???
  // homePageModel: HomePageModel;
  homePageSubscription = new Subscription();

  typeOfSpinner = 'loading;'
  progressSpinnerSubscription = new Subscription();


  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    console.log('HIT- home.component- ngOnInit')

    this.progressSpinnerSubscription = this.apiService.progressSpinnerObservable.subscribe((response: string) => {
      this.typeOfSpinner = response;
    });


    this.apiService.getHomePageDefaultGridData();
    this.homePageSubscription = this.apiService.homeModelObservable.subscribe((response: HomePageModel) => {
      console.log('home.component- ngOnInit- this.apiService.homeModelObservable.subscribe(response = ', response);

      this.homePageData = response;
      console.log('home.component- ngOnInit- this.homePageData = ', this.homePageData);
    });

  }


  ngOnDestroy(): void {
    this.homePageSubscription.unsubscribe();
    this.progressSpinnerSubscription.unsubscribe();
  }


}
