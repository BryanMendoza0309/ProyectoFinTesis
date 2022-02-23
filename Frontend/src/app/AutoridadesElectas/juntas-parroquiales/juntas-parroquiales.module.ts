import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuntasParroquialesPageRoutingModule } from './juntas-parroquiales-routing.module';

import { JuntasParroquialesPage } from './juntas-parroquiales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuntasParroquialesPageRoutingModule
  ],
  declarations: [JuntasParroquialesPage]
})
export class JuntasParroquialesPageModule {}
