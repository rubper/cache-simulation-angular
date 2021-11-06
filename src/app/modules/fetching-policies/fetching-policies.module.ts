import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchingPoliciesRoutingModule } from './fetching-policies-routing.module';
import { PrefetchComponent } from './pages/prefetch/prefetch.component';
import { RequestComponent } from './pages/request/request.component';
import { SelectiveComponent } from './pages/selective/selective.component';

//Módulo para las políticas de extracción
@NgModule({
  declarations: [
    PrefetchComponent,
    RequestComponent,
    SelectiveComponent
  ],
  imports: [
    CommonModule,
    FetchingPoliciesRoutingModule
  ]
})
export class FetchingPoliciesModule { }
