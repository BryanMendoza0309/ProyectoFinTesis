import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegimenOrganicoPageRoutingModule } from './regimen-organico-routing.module';

import { RegimenOrganicoPage } from './regimen-organico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegimenOrganicoPageRoutingModule
  ],
  declarations: [RegimenOrganicoPage]
})
export class RegimenOrganicoPageModule {}
