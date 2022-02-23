import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcMediosPage } from './rc-medios.page';

const routes: Routes = [
  {
    path: '',
    component: RcMediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcMediosPageRoutingModule {}
