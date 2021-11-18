// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { Subscription } from 'rxjs';
// import { ApiService } from '../../services/api/api.service';
// import { MaintenancePageModel } from '../maintenance/maintenance.model';


// @Component({
//   selector: 'app-maintenance',
//   templateUrl: './maintenance.component.html',
//   styleUrls: ['./maintenance.component.scss']
// })

// export class MaintenanceComponent implements OnInit, OnDestroy {

//   displayedColumns = [
//     'txtUnitName',
//     'billingBal',
//     'balanceSum',
//     'grandBal',
//     'total_Post_Final_Bill_Unbilled_AR_Days',
//     'nfD_Unbilled_AR_Days',
//     'fD_Unbilled_AR_Days',
//     'grand_Total_Unbilled_AR_Days',
//     'avgUnbilledARDays'
//   ];


//   maintenancePageData: any; 
//   maintenancePageSubscription = new Subscription();

//   typeOfSpinner = 'loading;'
//   progressSpinnerSubscription = new Subscription();

//   myFormGroup = this.formBuilder.group({
//     facilityId: ['']
//   });

//   constructor(
//     private formBuilder: FormBuilder,
//     private apiService: ApiService
//   ) { }

//   ngOnInit(): void {
//     console.log('HIT- maintenance.component- ngOnInit')

//     this.progressSpinnerSubscription = this.apiService.progressSpinnerObservable.subscribe((response: string) => {
//       this.typeOfSpinner = response;
//     });

//     this.apiService.getMaintenancePageBillAlertsGridData();

//     this.maintenancePageSubscription = this.apiService.maintenanceModelObservable.subscribe((response: MaintenancePageModel) => {
//       console.log('maintenance.component- ngOnInit- this.apiService.maintenanceModelObservable.subscribe(response = ', response);

//       this.maintenancePageData = response;
//       console.log('maintenance.component- ngOnInit- this.maintenancePageData = ', this.maintenancePageData);
//     });

//     if (this.maintenancePageData.divisionCollection !== undefined && this.maintenancePageData.divisionCollection.length > 0) {
//       this.myFormGroup = this.formBuilder.group({
//         facilityId: [this.maintenancePageData.facilityNames[0].intUnit]
//       });
//     }

//   }


//   ngOnDestroy(): void {
//     this.maintenancePageSubscription.unsubscribe();
//     this.progressSpinnerSubscription.unsubscribe();
//   }


// }

