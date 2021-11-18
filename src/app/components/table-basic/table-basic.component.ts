import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
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
  selector: 'app-table-basic',
  styleUrls: ['./table-basic.component.scss'],
  templateUrl: './table-basic.component.html'
})

export class TableBasicComponent implements OnInit {

  displayedColumns: string[] = [
    'position', 
    'name', 
    'weight', 
    'symbol', 
    'action'
  ];
  
  dataSource = new MatTableDataSource<any>();

  isLoading = true;

  pageNumber: number = 1;
  VOForm: FormGroup;
  isEditableNew: boolean = true;

  constructor(
    private formBuilder: FormBuilder) {

    this.VOForm = this.formBuilder.group({
      VORows: this.formBuilder.array([])
    });

  }

  ngOnInit(): void {

    this.VOForm = this.formBuilder.group({
      VORows: this.formBuilder.array(ELEMENT_DATA.map(val => this.formBuilder.group({
        position: new FormControl(val.position),
        name: new FormControl(val.name),
        weight: new FormControl(val.weight),
        symbol: new FormControl(val.symbol),
        action: new FormControl('existingRecord'),
        isEditable: new FormControl(true),
        isNewRow: new FormControl(false),
      })
      ))
    });

    this.isLoading = false;
    this.dataSource = new MatTableDataSource((this.VOForm.get('VORows') as FormArray).controls);

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

  initiateVOForm(): FormGroup {
    return this.formBuilder.group({

      position: new FormControl(234),
      name: new FormControl(''),
      weight: new FormControl(''),
      symbol: new FormControl(''),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }

}
