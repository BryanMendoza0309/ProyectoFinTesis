import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcelaMediosPage } from './marcela-medios.page';

const routes: Routes = [
  {
    path: '',
    component: MarcelaMediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcelaMediosPageRoutingModule {}
