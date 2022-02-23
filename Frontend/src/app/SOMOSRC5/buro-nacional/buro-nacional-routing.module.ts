import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuroNacionalPage } from './buro-nacional.page';

const routes: Routes = [
  {
    path: '',
    component: BuroNacionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuroNacionalPageRoutingModule {}
