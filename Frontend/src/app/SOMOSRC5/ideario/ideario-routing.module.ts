import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdearioPage } from './ideario.page';

const routes: Routes = [
  {
    path: '',
    component: IdearioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdearioPageRoutingModule {}
