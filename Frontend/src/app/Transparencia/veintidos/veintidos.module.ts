import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeintidosPageRoutingModule } from './veintidos-routing.module';

import { VeintidosPage } from './veintidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeintidosPageRoutingModule
  ],
  declarations: [VeintidosPage]
})
export class VeintidosPageModule {}
