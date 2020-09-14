import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {
  }
}
