import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { TypographyComponent } from '../pages/typography/typography.component';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'icon-speedometer',
    class: ''
  },
  {
    path: '/typography',
    title: 'Typography',
    icon: 'icon-note',
    class: ''
  },
  {
    path: '/grids',
    title: 'Grids',
    icon: 'icon-list',
    class: ''
  },
  {
    path: '/tables',
    title: 'Tables',
    icon: 'icon-grid',
    class: ''
  },
  {
    path: '/icons',
    title: 'Icons',
    icon: 'icon-puzzle',
    class: ''
  },
  {
    path: '/charts',
    title: 'Charts',
    icon: 'icon-chart',
    class: ''
  },
  {
    path: '/forms',
    title: 'Forms',
    icon: 'icon-folder',
    class: ''
  },
  {
    path: '/404',
    title: '404',
    icon: 'icon-ban',
    class: ''
  }
];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sidebar-comp',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public appName: string;
  public appVersion: string;
  public appLogo: string;

  public menuItems: RouteInfo[];

  constructor() { }

  ngOnInit(): void {
    this.appLogo = environment.appLogo;
    this.appName = environment.appName;
    this.appVersion = environment.appVersion;

    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
