import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type BookCategory = 'Popular' | 'New';

interface Book {
  title: string;
  author: string;
  category: BookCategory;
  tagline: string;
  badge?: string;
}

@Component({
  selector: 'app-popular-new-books-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-new-books-list.html',
  styleUrl: './popular-new-books-list.css',
})
export class PopularNewBooksList {
  popularBooks: Book[] = [
    {
      title: 'The Silent Garden',
      author: 'Amara Lee',
      category: 'Popular',
      tagline: 'A lyrical story about finding quiet in a noisy world.',
      badge: 'Editor’s pick',
    },
    {
      title: 'City of Paper Moons',
      author: 'Rohan Das',
      category: 'Popular',
      tagline: 'Two strangers, one unforgettable summer in a bookshop by the sea.',
      badge: 'Trending',
    },
    {
      title: 'Tea Leaves & Time Travel',
      author: 'Mina Sol',
      category: 'Popular',
      tagline: 'A cozy fantasy where every cup of tea opens a different door.',
    },
    {
      title: 'Letters We Never Sent',
      author: 'Isla Quinn',
      category: 'Popular',
      tagline: 'A tender exploration of love, grief, and second chances.',
    },
  ];

  newBooks: Book[] = [
    {
      title: 'Maps for Lost Things',
      author: 'Kaito Ren',
      category: 'New',
      tagline: 'A cartographer who can map memories is asked to erase his own.',
      badge: 'Just in',
    },
    {
      title: 'The House Between Chapters',
      author: 'Lina Park',
      category: 'New',
      tagline: 'A magical realist tale set in a library that only appears at dusk.',
    },
    {
      title: 'After the Last Page',
      author: 'Julien Hart',
      category: 'New',
      tagline: 'What happens to characters when their stories end?',
    },
    {
      title: 'How To Hold a Star',
      author: 'Nora Vale',
      category: 'New',
      tagline: 'A tender coming‑of‑age about friendship, music, and light.',
    },
  ];

  scrollCarousel(container: HTMLElement, direction: 'left' | 'right') {
    const amount = 320;
    const delta = direction === 'right' ? amount : -amount;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  }
}
