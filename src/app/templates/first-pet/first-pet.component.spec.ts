import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPetComponent } from './first-pet.component';

describe('FirstPetComponent', () => {
  let component: FirstPetComponent;
  let fixture: ComponentFixture<FirstPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
