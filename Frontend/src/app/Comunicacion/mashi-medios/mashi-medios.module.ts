import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MashiMediosPageRoutingModule } from './mashi-medios-routing.module';

import { MashiMediosPage } from './mashi-medios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MashiMediosPageRoutingModule
  ],
  declarations: [MashiMediosPage]
})
export class MashiMediosPageModule {}
