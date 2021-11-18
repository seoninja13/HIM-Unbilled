import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { HelperService } from 'src/app/services/helper/helper.service';
// import * as _ from 'lodash';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  myFormGroup = this.formBuilder.group({
    effectiveDate: [''],
    company: [''],
    division: [''],
    pasCoID: [''],
    unit: ['']
  });

  homePageSubscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private helperService: HelperService
  ) { }


  @Input() homePageData: any;


  ngOnInit(): void {
    // this.myFormGroup = this.formBuilder.group({
    //   effectiveDateDP: [new Date(this.homePageData.effectiveDateCollection.effDate)],
    //   companySelect: [this.homePageData.companyCollection[0].intCompanyID],
    //   divisionSelect: [this.homePageData.divisionCollection[0].intDivisionID],
    //   hscSelect: [this.homePageData.hscCollection[0].intPasCoId],
    //   facilitySelect: [this.homePageData.facilityCollection[0].id]
    // });

    this.myFormGroup = this.formBuilder.group({
      effectiveDate: [new Date(this.homePageData.effectiveDateCollection.effDate)],
      userID: ['JXU5744'],
      unit: [this.homePageData.facilityCollection[0].id],
      company: [this.homePageData.companyCollection[0].intCompanyID],
      division: [this.homePageData.divisionCollection[0].intDivisionID],
      hscCoID: [this.homePageData.facilityCollection[0].intHscCoId],
      pasCoID: [this.homePageData.hscCollection[0].intPasCoId]
    });

  }


  getHomePageFilterGridData() {

    // console.log('filter.component.ts- getHomePageFilterGridData- this.myFormGroup = ', this.myFormGroup);
    // console.log('filter.component.ts- getHomePageFilterGridData- this.myFormGroup.value = ', this.myFormGroup.value);
    
    this.myFormGroup.value.effectiveDate = this.helperService.getFormattedDate(this.myFormGroup.value.effectiveDate);
    // console.log('filter.component.ts- getHomePageFilterGridData- AFTER- this.myFormGroup.value.effectiveDate = ', this.myFormGroup.value.effectiveDate);

    if (this.myFormGroup.invalid) {
      return;
    }

    this.apiService.getHomePageFilterGridData(this.myFormGroup.value);
  }


}
