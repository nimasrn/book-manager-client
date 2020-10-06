import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { bookService } from 'src/app/core/services/book.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { MainService } from 'src/app/core/services/main.service';
import { ErrorMessage } from 'src/app/global/errorMessage';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit {
  loading = true;
  id: string;
  book: any;
  form: any;
  categories: any;
  addBookLoading;
  categoryForm: any;
  addCategoryLoading;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private bookService: bookService,
    private mainService: MainService,
    private categoryService: CategoryService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.getCategories();
  }

  getCategories() {
    this.categoryService.get().subscribe(res => {
      this.categories = res;
      if (this.id) {
        this.getBook();
      } else {
        this.createForm();
      }
    }, err => {
      this.mainService.showErrorSnackBar(ErrorMessage(err));
    })
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      categories: [''],
      ISBN: ['', [Validators.required]],
    });

    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });

    this.loading = false;
  }
  getBook() {
    this.bookService.getById(this.id).subscribe(res => {
      this.book = res;
      this.loading = false;
    }, err => {
      this.mainService.showErrorSnackBar(ErrorMessage(err));
    });
  }

  addBook() {
    console.log(`: -----------------------------------------------------------------`);
    console.log(`AdminBookComponent -> addBook -> this.form.value`, this.form.value);
    console.log(`: -----------------------------------------------------------------`);
    this.addBookLoading = true;
    this.bookService.create(this.form.value).subscribe(res => {
      this.addBookLoading = false;
    }, err => {
      this.mainService.showErrorSnackBar(ErrorMessage(err));
      this.addBookLoading = false;
    });
  }

  addCategory() {
    this.addCategoryLoading = true;
    this.categoryService.create(this.categoryForm.value).subscribe(res => {
      this.addCategoryLoading = false;
    }, err => {
      this.mainService.showErrorSnackBar(ErrorMessage(err));
      this.addCategoryLoading = false;
    });
  }

}
