import { Component } from '@angular/core';
import { SingleCryptoDetailsService } from './single-crypto-details.service';

@Component({
  selector: 'app-single-crypto-details',
  templateUrl: './single-crypto-details.component.html',
  styleUrls: ['./single-crypto-details.component.css'],
})
export class SingleCryptoDetailsComponent {
  cryptoInfo:any;
  constructor(private singlrCryptoDetails: SingleCryptoDetailsService) {}
  ngOnInit() {
 
  }
}
