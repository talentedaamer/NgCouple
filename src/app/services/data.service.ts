import { Injectable } from '@angular/core';
import { ICONS } from '../data/icons';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getIcons(): Observable<string[]> {
    return of(ICONS);
  }
}
