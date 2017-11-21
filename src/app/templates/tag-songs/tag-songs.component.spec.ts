import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSongsComponent } from './tag-songs.component';

describe('TagSongsComponent', () => {
  let component: TagSongsComponent;
  let fixture: ComponentFixture<TagSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
