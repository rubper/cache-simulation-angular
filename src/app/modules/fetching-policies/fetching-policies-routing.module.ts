import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefetchComponent } from './pages/prefetch/prefetch.component';
import { RequestComponent } from './pages/request/request.component';
import { SelectiveComponent } from './pages/selective/selective.component';

const routes: Routes = [
  {
    path: 'prefetch',
    component: PrefetchComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: 'miss',
    component: SelectiveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetchingPoliciesRoutingModule { }
