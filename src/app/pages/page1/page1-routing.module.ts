import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Page } from './page1.page';

const routes: Routes = [
  {
    path: '',
    component: Page1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1PageRoutingModule {}
