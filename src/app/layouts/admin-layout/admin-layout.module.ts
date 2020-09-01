// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// routes
import { AdminLayoutRoutes } from './admin-layout.routing';

// components
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { GridsComponent } from '../../pages/grids/grids.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { ChartsComponent } from '../../pages/charts/charts.component';
import { FormsComponent } from '../../pages/forms/forms.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    TypographyComponent,
    GridsComponent,
    TablesComponent,
    IconsComponent,
    ChartsComponent,
    FormsComponent,
    NotFoundComponent
  ]
})
export class AdminLayoutModule { }
