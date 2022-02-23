import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestrasCausasPage } from './nuestras-causas.page';

const routes: Routes = [
  {
    path: '',
    component: NuestrasCausasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestrasCausasPageRoutingModule {}
