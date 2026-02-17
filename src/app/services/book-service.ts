import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
}

export interface SearchResponse {
  numFound: number;
  docs: Book[];
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://openlibrary.org/search.json';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<SearchResponse> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(query)}`;
    return this.http.get<SearchResponse>(url);
  }
}
