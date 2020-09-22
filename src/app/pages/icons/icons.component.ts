import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public loading = false;
  public icons: string[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.dataService.getIcons().subscribe( (icons: string[]) => {
      this.icons = icons;
      // console.log('>> getIcons', icons );
    });
  }

  filterIcons($event): void {
    // this.icons = this.icons.filter( icon => {
    //   return icon == $event.target.value;
    // });
    // console.log('>> filter icons', $event.target.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
