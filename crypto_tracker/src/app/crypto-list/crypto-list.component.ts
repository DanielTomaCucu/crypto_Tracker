import { Component } from '@angular/core';
import { CryptoListService } from './crypto-list.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent {
  cryptoList: any;
  constructor(private cryptoListService: CryptoListService) {}
  ngOnInit() {
    this.cryptoListService.getAssets().subscribe((data) => {
      console.log(data.data);
      this.cryptoList = data.data;
    });
  }
}
