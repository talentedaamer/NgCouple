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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    TypographyComponent
  ]
})
export class AdminLayoutModule { }
