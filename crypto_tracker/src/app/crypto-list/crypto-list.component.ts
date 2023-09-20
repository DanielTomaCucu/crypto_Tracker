import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CryptoListService } from './crypto-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  subs: Subscription;
  isLoading: boolean = true;

  constructor(
    private cryptoListService: CryptoListService,
    private router: Router
  ) {
    this.subs = new Subscription();
  }

  ngAfterViewInit() {
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    this.subs = this.cryptoListService
      .getAssets(this.pageIndex, this.pageSize)
      .subscribe(
        (data) => {
          this.cryptoList = data.data;
          this.dataSource.data = this.cryptoList;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.isLoading = false; 
        }
      );
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
  redirectToCoin(slug: string) {
    this.router.navigate([`/${slug}`]);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
