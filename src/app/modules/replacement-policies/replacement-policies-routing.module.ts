import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifoComponent } from './pages/fifo/fifo.component';
import { LruComponent } from './pages/lru/lru.component';
import { RandomComponent } from './pages/random/random.component';

const routes: Routes = [
  {
    path:'fifo',
    component: FifoComponent
  },
  {
    path:'lru',
    component: LruComponent
  },
  {
    path:'fifo',
    component: RandomComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplacementPoliciesRoutingModule { }
