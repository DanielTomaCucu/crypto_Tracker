import { Component } from '@angular/core';
import { SingleCryptoDetailsService } from './single-crypto-details.service';
import { ActivatedRoute } from '@angular/router';
import { SingleCryptoInfoService } from './single-crypto-info/single-crypto-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-crypto-details',
  templateUrl: './single-crypto-details.component.html',
  styleUrls: ['./single-crypto-details.component.css'],
})
export class SingleCryptoDetailsComponent {
  cryptoInfo: any;
  cryptoDesc: any;
  percentage: any;
  symbol: string | undefined | null;
  usdValue!: number;
  cryptoValue!: number;
  cryptoRate: number = 0;
  subs: Subscription;
  constructor(
    private singlrCryptoDetails: SingleCryptoDetailsService,
    private route: ActivatedRoute,
    private singleCryptoInfoService: SingleCryptoInfoService
  ) {
    this.subs = new Subscription();
  }

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('name');
    this.subs.add(
      this.singlrCryptoDetails.getCoinMetrics(this.symbol).subscribe((data) => {
        this.cryptoInfo = data.data;
        this.cryptoRate = data.data.market_data.price_usd;
        let low = this.cryptoInfo.market_data.ohlcv_last_24_hour.low;
        let high = this.cryptoInfo.market_data.ohlcv_last_24_hour.high;
        this.percentage =
          ((this.cryptoInfo.market_data.price_usd - low) / (high - low)) * 100;
      })
    );
    this.subs.add(
      this.singleCryptoInfoService
        .getCryptoInfo(this.symbol)
        .subscribe(
          (data) =>
            (this.cryptoDesc =
              data.data.profile.general.background.background_details)
        )
    );
  }

  getGradientColor(percentage: number): string {
    let r = 255 - Math.round(2.55 * percentage);
    let g = Math.round(2.55 * percentage);

    return `rgb(${r}, ${g}, 0)`;
  }
  convertUsdToCrypto() {
    if (this.cryptoRate) {
      this.cryptoValue = this.usdValue * this.cryptoRate;
    }
  }
  convertCryptoToUsd() {
    if (this.cryptoRate && this.cryptoValue != null) {
      this.usdValue = this.cryptoValue / this.cryptoRate;
    }
  }
  isClamped: boolean = true;
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
