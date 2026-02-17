import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-section.html',
  styleUrl: './search-section.css',
})
export class SearchSection {}
