import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesPage,
    children: [
      {
        path: 'page1',
        loadChildren: () => import('./page1/page1.module').then(m => m.Page1PageModule)
      },
      {
        path: 'page2',
        loadChildren: () => import('./page2/page2.module').then(m => m.Page2PageModule)
      },
      {
        path: 'page3',
        loadChildren: () => import('./page3/page3.module').then(m => m.Page3PageModule)
      },
      {
        path: 'page4',
        loadChildren: () => import('./page4/page4.module').then(m => m.Page4PageModule)
      },
      {
        path: 'page5',
        loadChildren: () => import('./page5/page5.module').then(m => m.Page5PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
