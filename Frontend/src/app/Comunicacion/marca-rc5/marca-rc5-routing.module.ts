import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcaRc5Page } from './marca-rc5.page';

const routes: Routes = [
  {
    path: '',
    component: MarcaRc5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcaRc5PageRoutingModule {}
