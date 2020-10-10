import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit, OnDestroy {
  private loadIconsSubscription: Subscription;
  public loading = false;
  public icons: string[] = [];
  public iconsForm: FormGroup = new FormGroup({
    searchIconInput: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    )
  });
  private iconsFilterSubscription: Subscription;
  public searchText = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadIconsSubscription = this.dataService.getIcons()
      .subscribe(
        (icons: string[]) => {
          this.icons = icons;
        }
      );

    this.iconsFilterSubscription = this.iconsForm.get('searchIconInput')
      .valueChanges
      .pipe(
        distinctUntilChanged()
      )
      .subscribe( value => {
        this.searchText = value.toLowerCase();
      });
  }
  ngOnDestroy(): void {
    this.loadIconsSubscription.unsubscribe();
    this.iconsFilterSubscription.unsubscribe();
  }
}


