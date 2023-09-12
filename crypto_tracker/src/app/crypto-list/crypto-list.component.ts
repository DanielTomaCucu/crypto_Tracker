import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CryptoListService } from './crypto-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements AfterViewInit {
  cryptoList: any;
  @ViewChild(MatSort) sort!: MatSort;

  totalItems: number = 500;
  pageIndex: number = 1;
  pageSize: number = 50; 

  displayedColumns: string[] = [
    'index',
    'name',
    'price',
    'oneH',
    'oneDay',
    'mcap',
    'volume',
    'supply',
  ];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private cryptoListService: CryptoListService) {}

  ngAfterViewInit() {
    this.fetchData();
  }

  fetchData() {
    this.cryptoListService
      .getAssets(this.pageIndex, this.pageSize)
      .subscribe((data) => {
        this.cryptoList = data.data;
        this.dataSource.data = this.cryptoList;
      });
  }

  pageChanged(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  previousPage() {
    if (this.pageIndex > 1) {
      this.pageIndex--;
      this.fetchData();
    }
  }

  nextPage() {
    const maxPage = Math.ceil(this.totalItems / this.pageSize);
    if (this.pageIndex < maxPage) {
      this.pageIndex++;
      this.fetchData();
    }
  }
}
