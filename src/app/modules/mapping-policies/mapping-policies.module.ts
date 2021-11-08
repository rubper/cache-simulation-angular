import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingPoliciesRoutingModule } from './mapping-policies-routing.module';
import { DirectComponent } from './pages/direct/direct.component';
import { AssociativeComponent } from './pages/associative/associative.component';
import { SetAssociativeComponent } from './pages/set-associative/set-associative.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
  ]
})
export class MappingPoliciesModule { }
