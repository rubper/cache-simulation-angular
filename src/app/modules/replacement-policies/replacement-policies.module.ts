import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplacementPoliciesRoutingModule } from './replacement-policies-routing.module';
import { RandomComponent } from './pages/random/random.component';
import { LruComponent } from './pages/lru/lru.component';
import { FifoComponent } from './pages/fifo/fifo.component';

//Módulo para los algorítmos de sustitución
@NgModule({
  declarations: [
    RandomComponent,
    LruComponent,
    FifoComponent
  ],
  imports: [
    CommonModule,
    ReplacementPoliciesRoutingModule
  ]
})
export class ReplacementPoliciesModule { }
