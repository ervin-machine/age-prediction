import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeSortListComponent } from './age-sort-list.component';

describe('AgeSortListComponent', () => {
  let component: AgeSortListComponent;
  let fixture: ComponentFixture<AgeSortListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeSortListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeSortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
