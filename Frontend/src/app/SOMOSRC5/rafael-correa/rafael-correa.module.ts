import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RafaelCorreaPageRoutingModule } from './rafael-correa-routing.module';

import { RafaelCorreaPage } from './rafael-correa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RafaelCorreaPageRoutingModule
  ],
  declarations: [RafaelCorreaPage]
})
export class RafaelCorreaPageModule {}
