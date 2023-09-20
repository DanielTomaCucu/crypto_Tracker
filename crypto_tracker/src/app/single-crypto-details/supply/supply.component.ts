import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleCryptoDetailsService } from '../single-crypto-details.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css'],
})
export class SupplyComponent {
  dataSource!: MatTableDataSource<any>;
  symbol: string | undefined | null;
  displayedColumns: string[] = ['key', 'value'];
  subs: Subscription;
  constructor(
    private singlrCryptoDetails: SingleCryptoDetailsService,
    private route: ActivatedRoute
  ) {
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('name');
    this.subs = this.singlrCryptoDetails
      .getCoinMetrics(this.symbol)
      .subscribe((data) => {
        const rawData = data.data.supply_distribution;
        const transformedData = Object.entries(rawData).map(([key, value]) => ({
          key,
          value,
        }));
        this.dataSource = new MatTableDataSource(transformedData);
      });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
