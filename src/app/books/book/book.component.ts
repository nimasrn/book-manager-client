import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookService } from 'src/app/core/services/book.service';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  loading = true;
  id: string;
  book: any;
  constructor(
    private route: ActivatedRoute,
    private bookService: bookService,
    private mainService: MainService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getBook();
  }
  getBook() {
    this.bookService.getById(this.id).subscribe(res => {
      this.book = res;
      this.loading = false;
    }, err => {
      this.mainService.showErrorSnackBar(err);
    });
  }

}
