import { Component } from '@angular/core';
import { SingleCryptoDetailsService } from './single-crypto-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-crypto-details',
  templateUrl: './single-crypto-details.component.html',
  styleUrls: ['./single-crypto-details.component.css'],
})
export class SingleCryptoDetailsComponent {
  cryptoInfo: any;
  percentage: any;
  symbol: string | null | undefined;
  constructor(
    private singlrCryptoDetails: SingleCryptoDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('name');
    this.singlrCryptoDetails.getCoinMetrics(this.symbol).subscribe((data) => {
      this.cryptoInfo = data.data;
      console.log(data.data);
      let low = this.cryptoInfo.market_data.ohlcv_last_24_hour.low;
      let high = this.cryptoInfo.market_data.ohlcv_last_24_hour.high;
      this.percentage =
        ((this.cryptoInfo.market_data.price_usd - low) / (high - low)) * 100;
    });
  }

  getGradientColor(percentage: number): string {
    let r = 255 - Math.round(2.55 * percentage);
    let g = Math.round(2.55 * percentage);

    return `rgb(${r}, ${g}, 0)`;
  }
}
