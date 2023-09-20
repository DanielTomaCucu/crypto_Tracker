import { Component, Input } from '@angular/core';
import { SingleCryptoInfoService } from '../single-crypto-info/single-crypto-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css'],
})
export class ContributorsComponent {
  cryptoCon: any;
  @Input() symbol: string | undefined | null;
  subs: Subscription;

  constructor(private singleCryptoInfoService: SingleCryptoInfoService) {
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.subs = this.singleCryptoInfoService
      .getCryptoInfo(this.symbol)
      .subscribe((data) => (this.cryptoCon = data.data.profile.contributors));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
