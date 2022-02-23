import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaricaturaRcPage } from './caricatura-rc.page';

const routes: Routes = [
  {
    path: '',
    component: CaricaturaRcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaricaturaRcPageRoutingModule {}
