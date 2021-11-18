import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accountDetails: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAccountList().subscribe(response => {
      console.log('Response: ', response);
      this.accountDetails = response;
    });
  }

}
