import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '@shared/utils/header/header.component';
import { BehaviorSubject } from 'rxjs';
import { BaseComponent } from '@shared/utils/base.component';

@Component({
  selector: 'acs-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent extends BaseComponent {
  @ViewChild('header') header!: HeaderComponent;
  constructor() { 
    super();
  }

  closeHandler(): void {
    this.header.outterClickHandler();
  }

}
