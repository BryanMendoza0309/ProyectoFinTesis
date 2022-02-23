import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefecturasPageRoutingModule } from './prefecturas-routing.module';

import { PrefecturasPage } from './prefecturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefecturasPageRoutingModule
  ],
  declarations: [PrefecturasPage]
})
export class PrefecturasPageModule {}
