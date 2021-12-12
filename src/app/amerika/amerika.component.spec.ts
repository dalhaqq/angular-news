import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmerikaComponent } from './amerika.component';

describe('AmerikaComponent', () => {
  let component: AmerikaComponent;
  let fixture: ComponentFixture<AmerikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmerikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmerikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
