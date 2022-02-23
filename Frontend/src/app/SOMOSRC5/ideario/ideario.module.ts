import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdearioPageRoutingModule } from './ideario-routing.module';

import { IdearioPage } from './ideario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdearioPageRoutingModule
  ],
  declarations: [IdearioPage]
})
export class IdearioPageModule {}
