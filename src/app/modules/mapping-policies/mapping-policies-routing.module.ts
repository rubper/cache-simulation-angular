import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociativeComponent } from './pages/associative/associative.component';
import { DirectComponent } from './pages/direct/direct.component';
import { SetAssociativeComponent } from './pages/set-associative/set-associative.component';

const routes: Routes = [
  {
    path:'direct',
    component: DirectComponent
  },
  {
    path:'associative',
    component: AssociativeComponent
  },
  {
    path:'set-associative',
    component: SetAssociativeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MappingPoliciesRoutingModule { }
