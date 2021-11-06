import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteBackComponent } from './pages/write-back/write-back.component';
import { WriteThroughComponent } from './pages/write-through/write-through.component';
import { WriteWithAlocateComponent } from './pages/write-with-alocate/write-with-alocate.component';
import { WriteWithNoAlocateComponent } from './pages/write-with-no-alocate/write-with-no-alocate.component';

const routes: Routes = [
  {
    path: 'write-back',
    component: WriteBackComponent
  },
  {
    path: 'write-through',
    component: WriteThroughComponent
  },
  {
    path: 'write-with-alocate',
    component: WriteWithAlocateComponent
  },
  {
    path: 'write-with-no-alocate',
    component: WriteWithNoAlocateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritingPoliciesRoutingModule { }
