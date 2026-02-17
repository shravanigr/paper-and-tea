import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from './book.reducer';

export const selectBookState = createFeatureSelector<BookState>('book');

export const selectBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);

export const selectLoading = createSelector(
  selectBookState,
  (state: BookState) => state.loading
);

export const selectError = createSelector(
  selectBookState,
  (state: BookState) => state.error
);

export const selectPopularBooks = createSelector(
  selectBookState,
  (state: BookState) => state.popularBooks
);

export const selectNewBooks = createSelector(
  selectBookState,
  (state: BookState) => state.newBooks
);

export const selectBookByKey = (key: string) => createSelector(
  selectBooks,
  selectPopularBooks,
  selectNewBooks,
  (books, popularBooks, newBooks) => {
    const allBooks = [...books, ...popularBooks, ...newBooks];
    return allBooks.find(book => book.key === key);
  }
);
