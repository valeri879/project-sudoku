import { Component, OnInit, HostListener, Input } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss']
})
export class SudokuBoardComponent implements OnInit {

  @Input() game: Game;

  constructor() { }

  ngOnInit() { }

  _clearSelectedValue = () => {
    this.game.selectedValue = null;
  }

  _selectCell = (i, j, x, y) => {
    const value = this.game.progressBoard[i][j][x][y];
    this.game.selectedCell = this._translateCell(i, j, x, y);
    this.game.selectedValue = value;
  }

  _translateCell = (i, j, x, y) => {
    const cellData = [i, j, x, y];
    return cellData.every((point) => 0 <= point && point <= 2) ? {i, j, x, y} : null;
  }

  _anyCellGuess = (i, j, x, y) => {
    return this.game.progressBoard[i][j][x][y] !== this.game.initialBoard[i][j][x][y];
  }

  _isSelectedCell = (i, j, x, y) => {
    return this.game.selectedCell ? (
      i === this.game.selectedCell.i &&
      j === this.game.selectedCell.j &&
      x === this.game.selectedCell.x &&
      y === this.game.selectedCell.y
    ) : false;
  }

  @HostListener('document:keyup', ['$event'] )
  onKey = ($event: KeyboardEvent) => {
    if (this.game.selectedCell) {
      const allowedInput = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];
      if (allowedInput.includes($event.key)) {
        const { i, j, x, y } = this.game.selectedCell;
        if ($event.key === 'Backspace') {
          this.game.progressBoard[i][j][x][y] = this.game.initialBoard[i][j][x][y];
        } else {
          const value = parseInt($event.key, 10);
          if (!this.game.initialBoard[i][j][x][y]) {
            this.game.progressBoard[i][j][x][y] = value;
            this.game.selectedValue = value;
          }
        }
      }
    }
  }
}
