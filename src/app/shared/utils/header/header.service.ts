import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeaderService {
  menuIsActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  outsideClick$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  menuItemHasBeenClicked(): void {
    this.menuIsActive$.next(true);
    this.outsideClick$.next(false);
  }
  menuHasBeenClosed(): void {
    this.menuIsActive$.next(false);
    this.outsideClick$.next(true);
  }

}
