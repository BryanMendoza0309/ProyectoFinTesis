import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancadaMediosPage } from './bancada-medios.page';

const routes: Routes = [
  {
    path: '',
    component: BancadaMediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancadaMediosPageRoutingModule {}
