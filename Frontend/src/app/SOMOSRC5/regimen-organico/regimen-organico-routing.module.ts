import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegimenOrganicoPage } from './regimen-organico.page';

const routes: Routes = [
  {
    path: '',
    component: RegimenOrganicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegimenOrganicoPageRoutingModule {}
