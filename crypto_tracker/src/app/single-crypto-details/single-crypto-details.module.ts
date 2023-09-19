import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCryptoDetailsComponent } from './single-crypto-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { SingleCryptoInfoComponent } from './single-crypto-info/single-crypto-info.component';
import { FormsModule } from '@angular/forms';
import { RemoveAnchorPipe } from './removeAnchor.pipe';
import { InvestorsComponent } from './investors/investors.component';
import { ContributorsComponent } from './contributors/contributors.component';

const routes: Routes = [{ path: '', component: SingleCryptoDetailsComponent }];

@NgModule({
  declarations: [
    SingleCryptoDetailsComponent,
    ChartWidgetComponent,
    SingleCryptoInfoComponent,
    RemoveAnchorPipe,
    InvestorsComponent,
    ContributorsComponent,
  ],
  exports: [RouterModule, RemoveAnchorPipe],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class SingleCryptoDetailsModule {}
