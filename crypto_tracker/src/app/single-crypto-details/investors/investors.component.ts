import { Component, Input } from '@angular/core';
import { SingleCryptoInfoService } from '../single-crypto-info/single-crypto-info.service';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css'],
})
export class InvestorsComponent {
  cryptoInv:any
  @Input() symbol: string | undefined | null;
  constructor(private singleCryptoInfoService: SingleCryptoInfoService) {}
  ngOnInit() {
    this.singleCryptoInfoService
      .getCryptoInfo(this.symbol)
      .subscribe((data) => (this.cryptoInv = data.data.profile.contributors));
  }
}
