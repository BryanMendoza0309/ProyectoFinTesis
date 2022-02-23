import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RafaelCorreaPage } from './rafael-correa.page';

const routes: Routes = [
  {
    path: '',
    component: RafaelCorreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RafaelCorreaPageRoutingModule {}
