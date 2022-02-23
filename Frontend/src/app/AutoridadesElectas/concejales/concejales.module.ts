import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcejalesPageRoutingModule } from './concejales-routing.module';

import { ConcejalesPage } from './concejales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcejalesPageRoutingModule
  ],
  declarations: [ConcejalesPage]
})
export class ConcejalesPageModule {}
