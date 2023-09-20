import { Component, Input } from '@angular/core';
import { SingleCryptoInfoService } from '../single-crypto-info/single-crypto-info.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css'],
})
export class InvestorsComponent {
  cryptoInv: any;
  @Input() symbol: string | undefined | null;
  subs: Subscription;
  constructor(private singleCryptoInfoService: SingleCryptoInfoService) {
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.subs = this.singleCryptoInfoService
      .getCryptoInfo(this.symbol)
      .subscribe((data) => (this.cryptoInv = data.data.profile.investors));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
