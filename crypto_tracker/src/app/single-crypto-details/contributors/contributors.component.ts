import { Component, Input } from '@angular/core';
import { SingleCryptoInfoService } from '../single-crypto-info/single-crypto-info.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css'],
})
export class ContributorsComponent {
  cryptoCon: any;
  @Input() symbol: string | undefined | null;
  constructor(private singleCryptoInfoService: SingleCryptoInfoService) {}
  ngOnInit() {
    this.singleCryptoInfoService
      .getCryptoInfo(this.symbol)
      .subscribe((data) => (this.cryptoCon = data.data.profile.contributors));
  }
}
