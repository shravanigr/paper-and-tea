import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as BookActions from '../../store/book.actions';
import * as BookSelectors from '../../store/book.selectors';
import { Book } from '../../services/book-service';

interface BookViewModel {
  key: string;
  title: string;
  author: string;
  category: 'Popular' | 'New';
  tagline: string;
  badge?: string;
}

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-popular-new-books-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './popular-new-books-list.html',
  styleUrl: './popular-new-books-list.css',
})
export class PopularNewBooksList implements OnInit {
  private store = inject(Store);

  popularBooks$: Observable<BookViewModel[]>;
  newBooks$: Observable<BookViewModel[]>;

  constructor() {
    this.popularBooks$ = this.store.select(BookSelectors.selectPopularBooks).pipe(
      map(books => books.map(book => ({
        key: book.key,
        title: book.title,
        author: book.author_name?.[0] || 'Unknown Author',
        category: 'Popular' as const,
        tagline: `First published in ${book.first_publish_year || 'N/A'}`,
        badge: this.getRandomBadge()
      })))
    );

    this.newBooks$ = this.store.select(BookSelectors.selectNewBooks).pipe(
      map(books => books.map(book => ({
        key: book.key,
        title: book.title,
        author: book.author_name?.[0] || 'Unknown Author',
        category: 'New' as const,
        tagline: `First published in ${book.first_publish_year || 'N/A'}`,
        badge: 'Just in'
      })))
    );
  }

  ngOnInit() {
    this.store.dispatch(BookActions.loadPopularBooks());
    this.store.dispatch(BookActions.loadNewBooks());
  }

  getRandomBadge(): string | undefined {
    return Math.random() > 0.5 ? 'Trending' : undefined;
  }

  scrollCarousel(container: HTMLElement, direction: 'left' | 'right') {
    const amount = 320;
    const delta = direction === 'right' ? amount : -amount;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  }
}
