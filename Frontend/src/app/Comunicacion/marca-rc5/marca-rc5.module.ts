import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcaRc5PageRoutingModule } from './marca-rc5-routing.module';

import { MarcaRc5Page } from './marca-rc5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcaRc5PageRoutingModule
  ],
  declarations: [MarcaRc5Page]
})
export class MarcaRc5PageModule {}
