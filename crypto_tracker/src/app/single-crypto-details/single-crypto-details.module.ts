import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCryptoDetailsComponent } from './single-crypto-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SingleCryptoDetailsComponent }];
@NgModule({
  
  declarations:[SingleCryptoDetailsComponent],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],

})
export class SingleCryptoDetailsModule {}
