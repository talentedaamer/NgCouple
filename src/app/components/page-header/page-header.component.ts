import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() heading: string;
  @Input() subHeading: string;

  constructor() { }

  ngOnInit(): void {
  }
}
