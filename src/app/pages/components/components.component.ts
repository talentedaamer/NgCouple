import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  public cardLink: any;

  constructor() { }

  ngOnInit(): void {
    this.cardLink = { link: '/', text: 'View More' };
  }
}
