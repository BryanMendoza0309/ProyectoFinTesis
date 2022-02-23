import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancadaMediosPageRoutingModule } from './bancada-medios-routing.module';

import { BancadaMediosPage } from './bancada-medios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancadaMediosPageRoutingModule
  ],
  declarations: [BancadaMediosPage]
})
export class BancadaMediosPageModule {}
