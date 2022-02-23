import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeintiunoPage } from './veintiuno.page';

const routes: Routes = [
  {
    path: '',
    component: VeintiunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeintiunoPageRoutingModule {}
