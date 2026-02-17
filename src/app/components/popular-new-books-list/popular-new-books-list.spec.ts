import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularNewBooksList } from './popular-new-books-list';

describe('PopularNewBooksList', () => {
  let component: PopularNewBooksList;
  let fixture: ComponentFixture<PopularNewBooksList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularNewBooksList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularNewBooksList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
