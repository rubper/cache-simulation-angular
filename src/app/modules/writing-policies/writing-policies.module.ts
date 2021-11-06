import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingPoliciesRoutingModule } from './writing-policies-routing.module';
import { WriteThroughComponent } from './pages/write-through/write-through.component';
import { WriteBackComponent } from './pages/write-back/write-back.component';
import { WriteWithAlocateComponent } from './pages/write-with-alocate/write-with-alocate.component';
import { WriteWithNoAlocateComponent } from './pages/write-with-no-alocate/write-with-no-alocate.component';

//Módulo para las políticas de escritura
@NgModule({
  declarations: [
    WriteThroughComponent,
    WriteBackComponent,
    WriteWithAlocateComponent,
    WriteWithNoAlocateComponent
  ],
  imports: [
    CommonModule,
    WritingPoliciesRoutingModule
  ]
})
export class WritingPoliciesModule { }
