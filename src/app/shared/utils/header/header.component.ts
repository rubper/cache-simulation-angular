import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/utils/base.component';
import { PolicyGroup } from '@shared/models/policy-group.model';
import {cachePolicies} from './header.constant';
import { HeaderService } from './header.service';

@Component({
  selector: 'acs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  policies = cachePolicies;
  mobileToggle = true;
  constructor(
    private readonly headerService: HeaderService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  /**
   * Handles the click event for each one of the menu items
   * 
   * @param event 
   */
  clickHandler(event: boolean, group: PolicyGroup) {
    //el servicio debe saber que el clic no fue fuera del header
    this.headerService.OutterStateSubject.next(false);
    //si ya hay uno abierto
    if (this.headerService.openTabsCount === 1) {
      //cerrar todos los menus
      this.headerService.closeAllMenuItems();
    }
    //si es un evento para abrir el menu
    if (event) {
      //click turns on visibility
      this.headerService.menuItemHasBeenOpened(group);
    } else {
      //click turns off visibility
      this.headerService.menuHasBeenClosed(group);
    }
  }

  outterClickHandler() {
    //method to call when the click is outside the header
    this.headerService.outterItemHasBeenClicked();
  }
}
