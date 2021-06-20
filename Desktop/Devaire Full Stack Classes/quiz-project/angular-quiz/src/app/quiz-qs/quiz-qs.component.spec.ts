import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQsComponent } from './quiz-qs.component';

describe('QuizQsComponent', () => {
  let component: QuizQsComponent;
  let fixture: ComponentFixture<QuizQsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
