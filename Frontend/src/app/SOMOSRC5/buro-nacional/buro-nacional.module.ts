import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuroNacionalPageRoutingModule } from './buro-nacional-routing.module';

import { BuroNacionalPage } from './buro-nacional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuroNacionalPageRoutingModule
  ],
  declarations: [BuroNacionalPage]
})
export class BuroNacionalPageModule {}
