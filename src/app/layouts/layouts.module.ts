import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [BaseLayoutComponent],
})
export class LayoutsModule {}
