import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosOficialesPageRoutingModule } from './comunicados-oficiales-routing.module';

import { ComunicadosOficialesPage } from './comunicados-oficiales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadosOficialesPageRoutingModule
  ],
  declarations: [ComunicadosOficialesPage]
})
export class ComunicadosOficialesPageModule {}
