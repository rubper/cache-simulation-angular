import { Component, Input, OnInit } from '@angular/core';
import {cachePolicies} from './header.constant';
import { HeaderService } from './header.service';

@Component({
  selector: 'acs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  policies = cachePolicies;
  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  clickHandler(event: boolean) {
    if (event) {
      this.headerService.menuItemHasBeenClicked();
    }
  }

}
