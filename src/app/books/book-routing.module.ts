import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books.component';


const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [

      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'admin',
        component: AdminBookComponent
      },
      {
        path: ':id',
        component: BookComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
