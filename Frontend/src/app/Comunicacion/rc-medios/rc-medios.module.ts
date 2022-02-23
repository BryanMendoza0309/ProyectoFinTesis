import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcMediosPageRoutingModule } from './rc-medios-routing.module';

import { RcMediosPage } from './rc-medios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcMediosPageRoutingModule
  ],
  declarations: [RcMediosPage]
})
export class RcMediosPageModule {}
