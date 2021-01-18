import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './exception/not-found/not-found.component';
import { BopoComponent } from './pobo/bopo.component';
import { CopoComponent } from './copo/copo.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'exception',
      loadChildren: () => import('./exception/exception.module')
        .then(m => m.ExceptionModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
    {
      path: 'bopo',
      component: BopoComponent,
    },
    {
      path: 'cobo',
      component: CopoComponent,
    },
    {
      path: 'payment',
      loadChildren: () => import('./payment/payment.module')
        .then(m => m.PaymentModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
