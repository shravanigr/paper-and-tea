import { createAction, props } from '@ngrx/store';
import { Book } from '../services/book-service';

export const searchBooks = createAction(
  '[Book] Search Books',
  props<{ query: string }>()
);

export const searchBooksSuccess = createAction(
  '[Book] Search Books Success',
  props<{ books: Book[] }>()
);

export const searchBooksFailure = createAction(
  '[Book] Search Books Failure',
  props<{ error: string }>()
);

export const loadPopularBooks = createAction('[Book] Load Popular Books');

export const loadPopularBooksSuccess = createAction(
  '[Book] Load Popular Books Success',
  props<{ books: Book[] }>()
);

export const loadPopularBooksFailure = createAction(
  '[Book] Load Popular Books Failure',
  props<{ error: string }>()
);

export const loadNewBooks = createAction('[Book] Load New Books');

export const loadNewBooksSuccess = createAction(
  '[Book] Load New Books Success',
  props<{ books: Book[] }>()
);

export const loadNewBooksFailure = createAction(
  '[Book] Load New Books Failure',
  props<{ error: string }>()
);
