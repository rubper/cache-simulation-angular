import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PolicyGroup } from '@shared/models/policy-group.model';
import { cachePolicies } from './header.constant';
import { PoliciesHandler } from '@shared/types/policies-handler.type';
import { PolicyType } from '@shared/types/policy-type.type';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private menuIsActive$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private outsideClick$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private handlers: PoliciesHandler = {};
  openTabsCount = 0;
  constructor() {
    cachePolicies.forEach((element: PolicyGroup) => {
      this.handlers[element.name] = new BehaviorSubject<boolean>(false);
    });
  }
  /**
   * Tells the handler to set to True the Behavior Subject that handles the state of our menu
   * @param {PolicyGroup} group - The group of policies to show in the menu
   * @returns {void}
   */
  menuItemHasBeenOpened(group: PolicyGroup): void {
    if (this.openTabsCount === 1) {
      this.closeAllMenuItems();
    }
    this.menuIsActive$.next(true);
    this.handlers[group.name]?.next(true);
    this.openTabsCount++;
  }
  /**
   * Tells the handler to set to False the Behavior Subject that handles the state of our menu
   * @param {PolicyGroup} group - The group of policies to hide in the menu
   */
  menuHasBeenClosed(group: PolicyGroup): void {
    this.handlers[group.name]?.next(false);
    if (this.openTabsCount === 1) {
      this.openTabsCount--;
    }
    this.menuIsActive$.next(false);
  }
  /**
   * Tells the outsideClick Behavior Subject that there was an outside click
   * @returns {void}
   */
  outterItemHasBeenClicked(): void {
    this.outsideClick$.next(true);
    this.closeAllMenuItems();
  }
  /**
   * Closes all menus
   * @returns {void}
   */
  closeAllMenuItems(): void {
    this.openTabsCount = 0;
    this.menuIsActive$.next(false);
    cachePolicies.forEach((element: PolicyGroup) => {
      this.handlers[element.name]?.next(false);
    });
  }
  get MenuStateSubject(): BehaviorSubject<boolean> {
    return this.menuIsActive$;
  }
  get MenuState(): boolean {
    return this.MenuStateSubject.getValue();
  }
  get OutterStateSubject(): BehaviorSubject<boolean> {
    return this.outsideClick$;
  }
  get OutterState(): boolean {
    return this.OutterStateSubject.getValue();
  }
  /**
   * Gets current handler
   * @param {PolicyType} type - The current policy type of the menu
   * @returns {BehaviorSubject<boolean>} The handler for the current policy, as Behavior Subject of the state for the current menu
   */
  getHandler(type: PolicyType): BehaviorSubject<boolean> {
    return this.handlers[type] || new BehaviorSubject<boolean>(false);
  }
}
