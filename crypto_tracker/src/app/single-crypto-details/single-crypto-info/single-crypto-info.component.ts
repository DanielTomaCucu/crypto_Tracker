import { Component, Input } from '@angular/core';
import { SingleCryptoInfoService } from './single-crypto-info.service';

@Component({
  selector: 'app-single-crypto-info',
  templateUrl: './single-crypto-info.component.html',
  styleUrls: ['./single-crypto-info.component.css'],
})
export class SingleCryptoInfoComponent {
  @Input() symbol: string | undefined | null;
  info: any;
  constructor(private singleCryptoInfo: SingleCryptoInfoService) {}
  ngOnInit() {
    this.singleCryptoInfo.getCryptoInfo(this.symbol).subscribe((data) => {
      console.log(data.data.profile.contributors);
      this.info=data.data
    });
  }
}
