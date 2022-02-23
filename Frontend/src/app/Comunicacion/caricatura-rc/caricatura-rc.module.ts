import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaricaturaRcPageRoutingModule } from './caricatura-rc-routing.module';

import { CaricaturaRcPage } from './caricatura-rc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaricaturaRcPageRoutingModule
  ],
  declarations: [CaricaturaRcPage]
})
export class CaricaturaRcPageModule {}
