import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})

// export class SummaryComponent implements OnInit, OnDestroy {
export class SummaryComponent implements OnInit {

  summaryPageData: any; 
  summaryPageSubscription = new Subscription();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('HIT- summary.component- ngOnInit')

    this.apiService.getHomePageSummaryGridData();

    this.summaryPageSubscription = this.apiService.summaryModelObservable.subscribe(response => {
      console.log('summary.component- ngOnInit- this.apiService.summaryModelObservable.subscribe(response = ', response);
      
      this.summaryPageData = response;
      console.log('summary.component- ngOnInit- this.summaryPageData = ', this.summaryPageData);
    })
  }


  // ngOnDestroy(): void {
  //   if (!_.isNil(this.summaryPageSubscription)) {
  //     this.summaryPageSubscription.unsubscribe();
  //   }
  // }


}
