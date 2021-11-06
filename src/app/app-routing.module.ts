import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/landing/landing.module').then(m=>m.LandingModule),
      },
      {
        path: 'fetching',
        loadChildren: () => import('@modules/fetching-policies/fetching-policies.module').then(m=>m.FetchingPoliciesModule),
      },
      {
        path: 'writing',
        loadChildren: () => import('@modules/writing-policies/writing-policies.module').then(m=>m.WritingPoliciesModule),
      },
      {
        path: 'replacement',
        loadChildren: () => import('@modules/replacement-policies/replacement-policies.module').then(m=>m.ReplacementPoliciesModule),
      },
      {
        path: 'mapping',
        loadChildren: () => import('@modules/mapping-policies/mapping-policies.module').then(m=>m.MappingPoliciesModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
