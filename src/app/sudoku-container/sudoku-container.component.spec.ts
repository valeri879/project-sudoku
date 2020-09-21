import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuContainerComponent } from './sudoku-container.component';

describe('SudokuContainerComponent', () => {
  let component: SudokuContainerComponent;
  let fixture: ComponentFixture<SudokuContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
