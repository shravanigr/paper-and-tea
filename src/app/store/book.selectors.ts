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

export const selectBookByKey = (key: string) => createSelector(
  selectBooks,
  (books) => books.find(book => book.key === key)
);
