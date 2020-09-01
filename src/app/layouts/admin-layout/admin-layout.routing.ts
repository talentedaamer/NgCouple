import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { GridsComponent } from '../../pages/grids/grids.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { ChartsComponent } from '../../pages/charts/charts.component';
import { FormsComponent } from '../../pages/forms/forms.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

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
    component: GridsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];
