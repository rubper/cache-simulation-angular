import { Component, Input, } from '@angular/core';
import { storageNames } from '@shared/constants/ui.cons';
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
    const uiStorage = JSON.parse(localStorage.getItem(storageNames.uiStorage) || '{}');
    if (uiStorage[storageNames.bannerSeen]) {
      if (uiStorage[storageNames.bannerSeen] === true) {
        this.visible = false;
      }
    }
  }

  closeHandler(): void {
    this.visible = false;
    const uiStorage = JSON.parse(localStorage.getItem(storageNames.uiStorage) || '{}');
    uiStorage[storageNames.bannerSeen] = true;
    localStorage.setItem(storageNames.uiStorage, JSON.stringify(uiStorage));
  }
}
