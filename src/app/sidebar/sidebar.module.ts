import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
