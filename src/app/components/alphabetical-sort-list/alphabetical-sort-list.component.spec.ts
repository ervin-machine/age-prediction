import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalSortListComponent } from './alphabetical-sort-list.component';

describe('AlphabeticalSortListComponent', () => {
  let component: AlphabeticalSortListComponent;
  let fixture: ComponentFixture<AlphabeticalSortListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabeticalSortListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticalSortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
