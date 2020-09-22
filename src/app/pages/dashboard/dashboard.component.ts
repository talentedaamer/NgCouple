import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public cardLink: any;

  constructor() { }

  ngOnInit(): void {
    this.cardLink = { link: '/', text: 'View More' };
  }

}
