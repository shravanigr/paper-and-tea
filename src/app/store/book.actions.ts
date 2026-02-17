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
