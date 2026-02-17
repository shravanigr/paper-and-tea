import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Book } from '../../services/book-service';
import { selectBookByKey } from '../../store/book.selectors';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  backLinkText = 'Back to Book List';
  backLinkUrl = '/book-list';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['source'] === 'home') {
        this.backLinkText = 'Back to Home';
        this.backLinkUrl = '/';
      } else {
        this.backLinkText = 'Back to Book List';
        this.backLinkUrl = '/book-list';
      }
    });

    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        // Handle potentially encoded ID (e.g. /works/OL123W vs works/OL123W)
        // The service returns keys like "/works/OL123W". 
        // We will pass encoded ID in URL.
        const decodedId = decodeURIComponent(id || '');
        return this.store.select(selectBookByKey(decodedId));
      })
    );
  }
}
