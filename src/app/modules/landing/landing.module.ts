import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from '../landing/landing.component';
import { LayoutsModule } from '@layouts/layouts.module';
import { NavCardComponent } from './utils/nav-card/nav-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    LandingComponent,
    NavCardComponent
  ],
  imports: [
  CommonModule,
    LandingRoutingModule,
    LayoutsModule,
    MatGridListModule,
    MatRippleModule,
  ]
})
export class LandingModule { }
