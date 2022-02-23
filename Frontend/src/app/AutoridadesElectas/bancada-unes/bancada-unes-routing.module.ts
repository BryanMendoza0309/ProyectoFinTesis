import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancadaUnesPage } from './bancada-unes.page';

const routes: Routes = [
  {
    path: '',
    component: BancadaUnesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancadaUnesPageRoutingModule {}
