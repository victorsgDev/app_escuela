import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page5Page } from './page5.page';

const routes: Routes = [
  {
    path: '',
    component: Page5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page5PageRoutingModule {}
