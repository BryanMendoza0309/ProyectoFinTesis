import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefecturasPage } from './prefecturas.page';

const routes: Routes = [
  {
    path: '',
    component: PrefecturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefecturasPageRoutingModule {}
