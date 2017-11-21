import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagMoviesComponent } from './tag-movies.component';

describe('TagMoviesComponent', () => {
  let component: TagMoviesComponent;
  let fixture: ComponentFixture<TagMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
