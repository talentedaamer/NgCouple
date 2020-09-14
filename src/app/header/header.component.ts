import {Component, OnInit, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public displaySidebar = false;2

  @Output() onSidebarToggle
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {

  }
}
