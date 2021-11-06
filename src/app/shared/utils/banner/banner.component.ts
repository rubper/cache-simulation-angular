import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'acs-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input()
  visible: boolean = true;
  constructor() { }

  closeHandler(): void {
    this.visible = false;
  }
}
