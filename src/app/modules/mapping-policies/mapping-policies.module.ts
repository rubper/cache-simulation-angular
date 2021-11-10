import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MappingPoliciesRoutingModule } from './mapping-policies-routing.module';
import { DirectComponent } from './pages/direct/direct.component';
import { AssociativeComponent } from './pages/associative/associative.component';
import { SetAssociativeComponent } from './pages/set-associative/set-associative.component';
import { MainDialogComponent } from './utils/components/main-dialog/main-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';

//Módulo para las políticas de ubicacion
@NgModule({
  declarations: [
    DirectComponent,
    AssociativeComponent,
    SetAssociativeComponent,
    MainDialogComponent
  ],
  imports: [
    CommonModule,
    MappingPoliciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSelectModule,
  ]
})
export class MappingPoliciesModule { }
