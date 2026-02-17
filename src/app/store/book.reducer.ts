import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { Book } from '../services/book-service';

export interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

export const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

export const bookReducer = createReducer(
  initialState,
  on(BookActions.searchBooks, (state) => ({
    ...state,
    books: [],
    loading: true,
    error: null,
  })),
  on(BookActions.searchBooksSuccess, (state, { books }) => ({
    ...state,
    books,
    loading: false,
  })),
  on(BookActions.searchBooksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
