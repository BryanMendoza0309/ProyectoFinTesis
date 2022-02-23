import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancadaUnesPageRoutingModule } from './bancada-unes-routing.module';

import { BancadaUnesPage } from './bancada-unes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancadaUnesPageRoutingModule
  ],
  declarations: [BancadaUnesPage]
})
export class BancadaUnesPageModule {}
