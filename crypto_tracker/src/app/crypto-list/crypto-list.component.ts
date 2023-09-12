import { Component, ViewChild } from '@angular/core';
import { CryptoListService } from './crypto-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent {
  cryptoList: any;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private cryptoListService: CryptoListService) {}

  displayedColumns: string[] = [
    'name',
    'price',
    'oneH',
    'oneDay',
    'mcap',
    'volume',
  ];
  dataSource!: MatTableDataSource<any>;

  ngOnInit() {
    this.cryptoListService.getAssets().subscribe((data) => {
      console.log(data.data);
      this.cryptoList = data.data;
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }
}
