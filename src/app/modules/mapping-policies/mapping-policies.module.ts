import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingPoliciesRoutingModule } from './mapping-policies-routing.module';
import { DirectComponent } from './pages/direct/direct.component';
import { AssociativeComponent } from './pages/associative/associative.component';
import { SetAssociativeComponent } from './pages/set-associative/set-associative.component';

import { MatButtonModule } from '@angular/material/button';

//Módulo para las políticas de ubicacion
@NgModule({
  declarations: [
    DirectComponent,
    AssociativeComponent,
    SetAssociativeComponent
  ],
  imports: [
    CommonModule,
    MappingPoliciesRoutingModule,
    MatButtonModule,
  ]
})
export class MappingPoliciesModule { }
