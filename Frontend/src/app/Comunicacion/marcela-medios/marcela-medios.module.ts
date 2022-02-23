import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcelaMediosPageRoutingModule } from './marcela-medios-routing.module';

import { MarcelaMediosPage } from './marcela-medios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcelaMediosPageRoutingModule
  ],
  declarations: [MarcelaMediosPage]
})
export class MarcelaMediosPageModule {}
