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
import { SupplyComponent } from './supply/supply.component';
import { MatTableModule } from '@angular/material/table';
import { PrettyPrintPipe } from './prettyPrint.pipe';
const routes: Routes = [{ path: '', component: SingleCryptoDetailsComponent }];

@NgModule({
  declarations: [
    SingleCryptoDetailsComponent,
    ChartWidgetComponent,
    SingleCryptoInfoComponent,
    RemoveAnchorPipe,
    InvestorsComponent,
    ContributorsComponent,
    SupplyComponent,
    PrettyPrintPipe,
  ],
  exports: [RouterModule, RemoveAnchorPipe],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
  ],
})
export class SingleCryptoDetailsModule {}
