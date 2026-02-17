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

export interface TrendingResponse {
  works: Book[];
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://openlibrary.org/search.json';
  private trendingUrl = 'https://openlibrary.org/trending/weekly.json';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<SearchResponse> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(query)}`;
    return this.http.get<SearchResponse>(url);
  }

  getPopularBooks(): Observable<TrendingResponse> {
    return this.http.get<TrendingResponse>(`${this.trendingUrl}?limit=6`);
  }

  getNewBooks(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.apiUrl}?q=subject:fiction+language:eng&sort=new&limit=6&fields=key,title,author_name,cover_i,first_publish_year`);
  }
}
