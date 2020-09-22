import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent implements OnInit {
  @Input() title: string;
  @Input() heading: string;
  @Input() subHeading: string;
  @Input() icon: string;
  @Input() link: any;

  get hasIcon(): boolean {
    return (!!this.icon);
  }

  get hasLink(): boolean {
    return (this.link && this.link.text !== '' && this.link.link !== '');
  }

  ngOnInit(): void {
  }
}
