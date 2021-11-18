import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject, throwError, timer, Subscription } from 'rxjs';
import { map, retryWhen, catchError, mergeMap, finalize } from 'rxjs/operators';
import { HomePageModel } from '../../components/home/home.model';
import { SummaryPageModel } from '../../components/summary/summary.model';
import { MaintenancePageModel } from '../../components/maintenance/maintenance.model';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  typeOfSpinner = 'loading';
  private progressSpinnerSubscription = new BehaviorSubject(this.typeOfSpinner);
  progressSpinnerObservable = this.progressSpinnerSubscription.asObservable();

  private homeModelSubscription = new BehaviorSubject<HomePageModel>(new HomePageModel());
  homeModelObservable = this.homeModelSubscription.asObservable();

  private summaryModelSubscription = new BehaviorSubject<SummaryPageModel>(new SummaryPageModel());
  summaryModelObservable = this.summaryModelSubscription.asObservable();

  private maintenanceModelSubscription = new BehaviorSubject<MaintenancePageModel>(new MaintenancePageModel());
  maintenanceModelObservable = this.maintenanceModelSubscription.asObservable();

  private reportModelSubscription = new BehaviorSubject<SummaryPageModel>(new SummaryPageModel());
  reportModelObservable = this.reportModelSubscription.asObservable();


  constructor(
    private httpClient: HttpClient
  ) { }


  getHomePageDefaultGridData(): void {
    this.httpClient.get<any>('https://localhost:44389/MasterPage/GetDefaultGridData?userid=JXU5744')
      .pipe(
        map(res => res),
        retryWhen(this.genericRetryStrategy()),
        catchError(err => {
          return throwError('api.service.ts- retryWhenFailedQuery()- getHomePageDefaultGridData(): query- error = ', err);
        })
      ).subscribe(data => {
        console.log('apiService- getHomePageDefaultGridData()- data = ', data);
        this.homeModelSubscription.next(data);
        this.progressSpinnerSubscription.next('none');
      });
  }


  getMaintenancePageBillAlertsGridData(): void {
    const userId = 'JXU5744';

    const httpOptions = {
      headers: { 'userId': userId }
    };

    // // NEED VAR FOR 'facilityId' IN THE PARAMETERS
    // const httpOptions = {
    //   headers: { 'Content-Type': 'application/json' },
    //   params: { ...searchParams }
    // };

    this.httpClient.get<any>('https://localhost:44389/api/maintenance/BillAlerts/GetBillAlerts', httpOptions)
      .pipe(
        map(res => res),
        retryWhen(this.genericRetryStrategy()),
        catchError(err => {
          this.progressSpinnerSubscription.next('none');
          return throwError('api.service.ts- retryWhenFailedQuery()- getBillsAlertsGridData(): query- error = ', err);
        })
      ).subscribe(data => {
        console.log('apiService- getBillsAlertsGridData()- data = ', data);
        this.maintenanceModelSubscription.next(data);
        this.progressSpinnerSubscription.next('none');
      });
  }


  getHomePageSummaryGridData(): void {
    const url = 'https://localhost:44389/MasterPage/GetSummaryGridData'
    const body = {
      "effectiveDate": "9/8/2021",
      "userID": "JXU5744",
      "companyID": 1,
      "divisionID": -1,
      "hscid": -1,
      "sscid": -1,
      "unitID": -1
    }

    this.httpClient.put<any>(url, body)
      .pipe(
        map(res => res),
        retryWhen(this.genericRetryStrategy()),
        catchError(err => {
        this.progressSpinnerSubscription.next('none');
        return throwError('api.service.ts- retryWhenFailedQuery()- getHomePageSummaryGridData(): query- error = ', err);
        })
      ).subscribe(data => {
        console.log('apiService- getHomePageSummaryGridData()- data = ', data);
        this.summaryModelSubscription.next(data);
        this.progressSpinnerSubscription.next('none');
      });
  }

  getAccountList(): Observable<any> {
    // Patient Type - Outpatient - Total
    const url = 'http://10.234.136.199:44389/Account/Get';
    const body = {
        "effectiveDate": "2021-09-08",
        "userId": "JXU5744",
        "unitId": 355,
        "companyId": -1,
        "divisionId": -1,
        "hscid": -1,
        "sscid": -1,
        "reportType": "PatType",
        "reportValue1": "Total",
        "reportValue2": "",
        "reportValue3": ""
    }
    
    console.log('getAccountList()');
    return this.httpClient.put<any>(url, body)
      .pipe(
        map(res => res),
        retryWhen(this.genericRetryStrategy()),
        catchError(err => {
        this.progressSpinnerSubscription.next('none');
        return throwError('api.service.ts- retryWhenFailedQuery()- getAccountList(): query- error = ', err);
        })
      );
  }

  getHomePageFilterGridData(formData: any): void {
    console.log('api.service.ts- getHomePageFilterGridData(formData)- formData = ', formData);

    const url = 'https://localhost:44389/MasterPage/GetFilterGridData'
    const body = {
      "effectiveDate": "9/8/2021",
      "userID": "JXU5744",
      "unit": -1,
      "company": 1,
      "division": -1,
      "hscCoID": -1,
      "pasCoID": -1
    }

    //// NOTES: This is the JSON.stringify(formData) data but it DOESN'T WORK when just using LINE 93 but with that SAME DATA & JSON SYNTAX on LINES 84-92 it DOES WORK???
    //// POSSIBLE CAUSE: Only 1 DDL can have a Value while ALL the others need to have -1 as their Value 
    // api.service.ts- getHomePageFilterGridData(formData)- JSON.stringify(formData)- 
    // const body =  {
    //   "effectiveDate":"9/8/2021",
    //   "userID":"JXU5744",
    //   "unit":413,
    //   "company":1,
    //   "division":32,
    //   "hscCoID":25771,
    //   "pasCoID":8942
    // }
    // const body = JSON.stringify(formData);
    console.log('api.service.ts- getHomePageFilterGridData(formData)- JSON.stringify(formData)- body = ', body);

    this.httpClient.put<any>(url, body)
      .pipe(
        map(res => res),
        retryWhen(this.genericRetryStrategy()),
        catchError(err => {
        this.progressSpinnerSubscription.next('none');
        return throwError('api.service.ts- retryWhenFailedQuery()- getHomePageFilterGridData(): query- error = ', err);
        })
      ).subscribe(data => {
        console.log('apiService- getHomePageFilterGridData()- RESPONSE- data = ', data);
        this.summaryModelSubscription.next(data);
        this.progressSpinnerSubscription.next('none');
      });
  }


  genericRetryStrategy = ({ maxRetryAttempts = 1, scalingDuration = 500, excludedStatusCodes = [] }:
    { maxRetryAttempts?: number; scalingDuration?: number; excludedStatusCodes?: number[]; } = {}
  ) => (attempts: Observable<any>) => {

    return attempts.pipe(
      mergeMap((error, index) => {
        const retryAttempt = index + 1;

        console.log('ApiService- genericRetryStrategy- retryAttempt = ', retryAttempt);

        if (retryAttempt > maxRetryAttempts || excludedStatusCodes.find(e => e === error.status) != null) {
          return throwError('auth.service.ts- genericRetryStrategy()- (skipping retry) error = ', error);
        }

        return timer(scalingDuration);
      }),
      finalize(() => {
        console.log('apiService- genericRetryStrategy()- HIT- finalize');
        this.progressSpinnerSubscription.next('none');
      })
    );
  }

}
