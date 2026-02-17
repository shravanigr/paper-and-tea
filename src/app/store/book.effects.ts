import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BookService } from '../services/book-service';
import * as BookActions from './book.actions';

@Injectable()
export class BookEffects {
  private actions$ = inject(Actions);
  private bookService = inject(BookService);

  searchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.searchBooks),
      mergeMap(({ query }) =>
        this.bookService.searchBooks(query).pipe(
          map((response) => BookActions.searchBooksSuccess({ books: response.docs })),
          catchError((error) =>
            of(BookActions.searchBooksFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
