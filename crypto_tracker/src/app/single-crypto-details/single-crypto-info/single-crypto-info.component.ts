import { Component, Input } from '@angular/core';
import { SingleCryptoInfoService } from './single-crypto-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-crypto-info',
  templateUrl: './single-crypto-info.component.html',
  styleUrls: ['./single-crypto-info.component.css'],
})
export class SingleCryptoInfoComponent {
  @Input() symbol: string | undefined | null;
  info: any;
  subs: Subscription;
  constructor(private singleCryptoInfo: SingleCryptoInfoService) {
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.subs = this.singleCryptoInfo
      .getCryptoInfo(this.symbol)
      .subscribe((data) => {
        this.info = data.data;
      });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
