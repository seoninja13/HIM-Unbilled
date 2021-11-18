import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  getFormattedDate(date: Date): string {
    // console.log('helper.service.ts- getHomePageFilterGridData- date = ', date);
    
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString();
    const day = date.getDate().toString();
    const formattedDate = month + '/' + day + '/' + year;

    // console.log('helper.service.ts- getHomePageFilterGridData- formattedDate = ', formattedDate);

    return formattedDate;
  }

}
