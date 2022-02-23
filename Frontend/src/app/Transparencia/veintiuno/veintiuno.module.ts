import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeintiunoPageRoutingModule } from './veintiuno-routing.module';

import { VeintiunoPage } from './veintiuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeintiunoPageRoutingModule
  ],
  declarations: [VeintiunoPage]
})
export class VeintiunoPageModule {}
