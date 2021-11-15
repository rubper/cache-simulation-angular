import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchingPoliciesRoutingModule } from './fetching-policies-routing.module';
import { PrefetchComponent } from './pages/prefetch/prefetch.component';
import { RequestComponent } from './pages/request/request.component';
import { SelectiveComponent } from './pages/selective/selective.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

//Módulo para las políticas de extracción
@NgModule({
  declarations: [
    PrefetchComponent,
    RequestComponent,
    SelectiveComponent
  ],
  imports: [
    CommonModule,
    FetchingPoliciesRoutingModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class FetchingPoliciesModule { }
