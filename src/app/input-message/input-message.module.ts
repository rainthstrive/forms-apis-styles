import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputMessagePageRoutingModule } from './input-message-routing.module';

import { InputMessagePage } from './input-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InputMessagePageRoutingModule
  ],
  declarations: [InputMessagePage]
})
export class InputMessagePageModule {}
