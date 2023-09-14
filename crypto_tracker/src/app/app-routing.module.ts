import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoListComponent,
  },
  {
    path: ':name',
    loadChildren: () =>
      import('./single-crypto-details/single-crypto-details.module').then(
        (m) => m.SingleCryptoDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: '', 
    pathMatch: 'full',
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
