import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectBooks, selectLoading, selectError } from '../../store/book.selectors';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList {
  books$;
  loading$;
  error$;

  constructor(private store: Store) {
    this.books$ = this.store.select(selectBooks);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }
}
