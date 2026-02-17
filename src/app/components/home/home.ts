import { Component } from '@angular/core';
import { SearchSection } from '../search-section/search-section';
import { PopularNewBooksList } from '../popular-new-books-list/popular-new-books-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchSection, PopularNewBooksList],
  templateUrl: './home.html',
})
export class HomeComponent {}
