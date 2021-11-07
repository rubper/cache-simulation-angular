import { Component, AfterViewInit } from '@angular/core';
import { BaseComponent } from '@shared/utils/base.component';

@Component({
  selector: 'acs-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements AfterViewInit{
  title = 'cache-simulation-angular';
  ngAfterViewInit(): void {
    document.getElementsByTagName('body')[0].classList.add(this.theme.background); 
  }
}
