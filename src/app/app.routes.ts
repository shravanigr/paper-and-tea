import { Routes } from '@angular/router';
import { BooksList } from './components/books-list/books-list';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book-list', component: BooksList },
  { path: 'book-details/:id', loadComponent: () => import('./components/book-details/book-details').then(m => m.BookDetailsComponent) }
];
