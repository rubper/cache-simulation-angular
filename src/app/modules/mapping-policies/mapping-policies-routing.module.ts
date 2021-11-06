import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectComponent } from './pages/direct/direct.component';

const routes: Routes = [
  {
    path:'directa',
    component: DirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MappingPoliciesRoutingModule { }
