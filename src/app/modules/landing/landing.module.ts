import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from '../landing/landing.component';
import { LayoutsModule } from '@layouts/layouts.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
  CommonModule,
    LandingRoutingModule,
    LayoutsModule
  ]
})
export class LandingModule { }
