import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PolicyGroup } from '@shared/models/policy-group.model';

@Component({
  selector: 'acs-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  visible: boolean = false;
  @Input()
  policyGroup?: PolicyGroup;
  @Input()
  outterClose: boolean = false;
  @Output()
  hasBeenClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.visible = this.visible ? false : true;
    this.hasBeenClicked.emit(this.visible);
  }
}
