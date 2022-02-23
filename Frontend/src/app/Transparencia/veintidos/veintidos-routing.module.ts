import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeintidosPage } from './veintidos.page';

const routes: Routes = [
  {
    path: '',
    component: VeintidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeintidosPageRoutingModule {}
