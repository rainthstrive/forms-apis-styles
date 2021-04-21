import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputMessagePage } from './input-message.page';

const routes: Routes = [
  {
    path: '',
    component: InputMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputMessagePageRoutingModule {}
