import { Component, Input, } from '@angular/core';
import { BaseComponent } from '@shared/utils/base.component';

@Component({
  selector: 'acs-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent extends BaseComponent {
  @Input()
  visible: boolean = true;
  constructor() {
    super();  
  }

  closeHandler(): void {
    this.visible = false;
  }
}
