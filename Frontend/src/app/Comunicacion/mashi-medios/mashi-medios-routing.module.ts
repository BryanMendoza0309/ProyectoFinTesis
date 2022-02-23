import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MashiMediosPage } from './mashi-medios.page';

const routes: Routes = [
  {
    path: '',
    component: MashiMediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MashiMediosPageRoutingModule {}
