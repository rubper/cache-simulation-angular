import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '@shared/utils/header/header.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'acs-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {
  @ViewChild('header') header!: HeaderComponent;
  constructor() { }

  closeHandler(): void {
    this.header.outterClickHandler();
  }

}
