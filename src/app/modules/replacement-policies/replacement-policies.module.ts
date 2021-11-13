import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplacementPoliciesRoutingModule } from './replacement-policies-routing.module';
import { RandomComponent } from './pages/random/random.component';
import { LruComponent } from './pages/lru/lru.component';
import { FifoComponent } from './pages/fifo/fifo.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

//Módulo para los algorítmos de sustitución
@NgModule({
  declarations: [
    RandomComponent,
    LruComponent,
    FifoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    ReplacementPoliciesRoutingModule,
  ]
})
export class ReplacementPoliciesModule { }
