import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecaseInputComponent } from './titlecase-input.component';

describe('TitlecaseInputComponent', () => {
  let component: TitlecaseInputComponent;
  let fixture: ComponentFixture<TitlecaseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlecaseInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecaseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
