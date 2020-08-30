import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TypographyComponent } from '../../pages/typography/typography.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'grids',
    component: TypographyComponent
  },
  {
    path: 'tables',
    component: TypographyComponent
  },
  {
    path: 'icons',
    component: TypographyComponent
  },
  {
    path: 'charts',
    component: TypographyComponent
  },
  {
    path: 'login',
    component: TypographyComponent
  },
  {
    path: 'register',
    component: TypographyComponent
  },
  {
    path: '404',
    component: TypographyComponent
  }
];
