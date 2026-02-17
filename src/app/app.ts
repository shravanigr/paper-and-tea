import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { SearchSection } from './components/search-section/search-section';
import { PopularNewBooksList } from './components/popular-new-books-list/popular-new-books-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, SearchSection, PopularNewBooksList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paper-and-tea');
}
