import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatComponent } from './create-stat.component';

describe('CreateStatComponent', () => {
  let component: CreateStatComponent;
  let fixture: ComponentFixture<CreateStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
