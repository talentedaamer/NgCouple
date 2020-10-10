// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { ComponentsComponent } from '../../pages/components/components.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

// reusable components
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { CardComponent } from '../../components/card/card.component';
import { CardIconComponent } from '../../components/card-icon/card-icon.component';
import { CardSimpleComponent } from '../../components/card-simple/card-simple.component';
// pipes
import { ListSearchPipe } from '../../pipes/list-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    TypographyComponent,
    GridsComponent,
    TablesComponent,
    IconsComponent,
    ChartsComponent,
    FormsComponent,
    ComponentsComponent,
    NotFoundComponent,
    // reusable components
    PageHeaderComponent,
    CardComponent,
    CardIconComponent,
    CardSimpleComponent,
    // pipes
    ListSearchPipe
  ]
})
export class AdminLayoutModule { }
