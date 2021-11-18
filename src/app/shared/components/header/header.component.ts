import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface MenuItem {
  label: string;
  link: string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'HOME',
      link: '/home',
      icon: 'home',
      showOnMobile: false,
       showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'REPORTS',
      link: '/summary',
      icon: 'bar_chart',
      showOnMobile: false,
       showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'STATUS',
      link: '/status',
      icon: 'timeline',
      showOnMobile: false,
       showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'MAINTENANCE',
      link: '/maintenance',
      icon: 'build',
      showOnMobile: false,
       showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'LOGOUT',
      link: '/summary',
      icon: 'logout',
      showOnMobile: false,
       showOnTablet: false,
      showOnDesktop: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
