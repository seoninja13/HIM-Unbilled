import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { ApiService } from '../../services/api/api.service';
import { MaintenancePageModel } from '../maintenance/maintenance.model';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface IBillAlertDetail {
  alert: string;
  alertDesc: string;
  modified: Date;
  modBy: string;
  created: Date;
  respParty: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];



@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})

export class MaintenanceComponent implements OnInit, OnDestroy {

  displayedColumns = [
    'alert',
    'alertDesc',
    'modified',
    'modBy',
    'created',
    'respParty',
    'actions'
  ];

  dataSource = new MatTableDataSource<any>();
  pageNumber: number = 1;
  VOForm: FormGroup;
  isEditableNew: boolean = true;



  data: any; 
  maintenancePageSubscription = new Subscription();

  typeOfSpinner = 'loading;'
  progressSpinnerSubscription = new Subscription();

  myFormGroup = this.formBuilder.group({
    facilityId: ['']
  });



  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { 

    this.VOForm = this.formBuilder.group({
      VORows: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    console.log('HIT- maintenance.component- ngOnInit')

    this.progressSpinnerSubscription = this.apiService.progressSpinnerObservable.subscribe((response: string) => {
      this.typeOfSpinner = response;
    });

    this.apiService.getMaintenancePageBillAlertsGridData();

    this.maintenancePageSubscription = this.apiService.maintenanceModelObservable.subscribe((response: MaintenancePageModel) => {
      this.data = response;
      console.log('maintenance.component- ngOnInit- this.data = ', this.data);
      console.log('maintenance.component.ts- this.data.billAlertDetails = ', this.data.billAlertDetails);
      
      // console.log('maintenance.component.ts- BEFORE- this.VOForm = ', this.VOForm);
      this.VOForm = this.formBuilder.group({
        VORows: this.formBuilder.array(this.data.billAlertDetails.map(value => this.formBuilder.group({
          alert: new FormControl(value.alert),
          alertDesc: new FormControl(value.alertDesc),
          modified: new FormControl(value.modified),
          modBy: new FormControl(value.modBy),
          created: new FormControl(value.created),
          respParty: new FormControl(value.respParty),
          actions: new FormControl('existingRecord'),
          isEditable: new FormControl(true),
          isNewRow: new FormControl(false)
        })
        ))
      });
      console.log('maintenance.component.ts- AFTER- this.VOForm = ', this.VOForm);

      // console.log('maintenance.component.ts- BEFORE- this.dataSource = ', this.dataSource);
      this.dataSource = new MatTableDataSource((this.VOForm.get('VORows') as FormArray).controls);
      console.log('maintenance.component.ts- AFTER- this.dataSource = ', this.dataSource);

    });


    // this.VOForm = this.formBuilder.group({
    //   VORows: this.formBuilder.array(ELEMENT_DATA.map(val => this.formBuilder.group({
    //     position: new FormControl(val.position),
    //     name: new FormControl(val.name),
    //     weight: new FormControl(val.weight),
    //     symbol: new FormControl(val.symbol),
    //     actions: new FormControl('existingRecord'),
    //     isEditable: new FormControl(true),
    //     isNewRow: new FormControl(false),
    //   })
    //   ))
    // });

    // this.dataSource = new MatTableDataSource((this.VOForm.get('VORows') as FormArray).controls);

    const filterPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
      return filterPredicate.call(this.dataSource, data.value, filter);
    }

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddNewRow() {
    const control = this.VOForm.get('VORows') as FormArray;
    control.insert(0, this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls)
  }

  EditSVO(VOFormElement: any, i: any) {
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(false);
  }

  SaveVO(VOFormElement: any, i: any) {
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  CancelSVO(VOFormElement: any, i: any) {
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  // initiateVOForm(): FormGroup {
  //   return this.formBuilder.group({
  //     position: new FormControl(234),
  //     name: new FormControl(''),
  //     weight: new FormControl(''),
  //     symbol: new FormControl(''),
  //     actions: new FormControl('newRecord'),
  //     isEditable: new FormControl(false),
  //     isNewRow: new FormControl(true)
  //   });
  // }

  initiateVOForm(): FormGroup {
    return this.formBuilder.group({
      alert: new FormControl(''),
      alertDesc: new FormControl(''),
      modified: new FormControl(''),
      modBy: new FormControl(''),
      created: new FormControl(''),
      respParty: new FormControl(''),
      actions: new FormControl('existingRecord'),
      isEditable: new FormControl(true),
      isNewRow: new FormControl(false)
    });
  }



  ngOnDestroy(): void {
    this.maintenancePageSubscription.unsubscribe();
    this.progressSpinnerSubscription.unsubscribe();
  }


}

