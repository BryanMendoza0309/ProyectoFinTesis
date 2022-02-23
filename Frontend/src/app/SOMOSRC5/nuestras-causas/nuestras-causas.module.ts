import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestrasCausasPageRoutingModule } from './nuestras-causas-routing.module';

import { NuestrasCausasPage } from './nuestras-causas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestrasCausasPageRoutingModule
  ],
  declarations: [NuestrasCausasPage]
})
export class NuestrasCausasPageModule {}
