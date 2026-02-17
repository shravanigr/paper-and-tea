import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { searchBooks } from '../../store/book.actions';

@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-section.html',
  styleUrl: './search-section.css',
})
export class SearchSection {
  searchQuery = '';

  constructor(private store: Store, private router: Router) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      this.store.dispatch(searchBooks({ query: this.searchQuery }));
      this.router.navigate(['/book-list']);
    }
  }
}
