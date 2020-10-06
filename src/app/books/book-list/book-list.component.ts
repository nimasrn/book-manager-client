import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { merge, Observable, of as observableOf } from 'rxjs';
import { bookService } from 'src/app/core/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'ISBN', 'categories', 'more'];
  data: [] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private bookService: bookService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.bookService.get(this.paginator.pageIndex);
        }),
        map(data => {
          console.log(`: --------------------------------------------------`);
          console.log(`BookListComponent -> ngAfterViewInit -> data`, data);
          console.log(`: --------------------------------------------------`);
          this.isLoadingResults = false;
          this.resultsLength = data.count;

          return data.data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
  bookDetails(book) {
    this.router.navigate(['books', book.id]);
  }
}
