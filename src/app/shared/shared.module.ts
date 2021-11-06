import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './utils/header/header.component';
import { BannerComponent } from './utils/banner/banner.component';
import { HeaderMenuComponent } from './utils/header-menu/header-menu.component';
import { HeaderService } from './utils/header/header.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, BannerComponent, HeaderMenuComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  providers: [HeaderService],
  exports: [HeaderComponent, BannerComponent],
})
export class SharedModule {}
