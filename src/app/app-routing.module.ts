import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './core/guard/token.guard';
import { AuthGuard } from './core/guard/auth.guard';
import { NotfoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [TokenGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BookModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
