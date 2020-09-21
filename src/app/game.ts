/* Services */
import { SudokuService } from './sudoku.service';

export class Game {

  completedBoard: any;
  initialBoard: any;
  progressBoard: any;
  selectedCell: any;
  selectedValue: any;
  sudokuService: SudokuService;

  constructor() {
    this.sudokuService = new SudokuService();
    this.completedBoard = this.sudokuService.getNewBoard();
    this.initialBoard = this.sudokuService.maskBoard(this.completedBoard, null); // TODO: Implement Difficulty Enum
    this.reset();
  }

  reset = () => {
    this.progressBoard = this.sudokuService.cloneBoard(this.initialBoard);
    this.selectedCell = null;
    this.selectedValue = null;
  }

  modified = () => {
    for (let i = 0; i < this.initialBoard.length; i++) {
      const row = this.initialBoard[i];
      for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        for (let x = 0; x < cell.length; x++) {
          const cellRow = cell[x];
          for (let y = 0; y < cellRow.length; y++) {
            if (cellRow[y] !== this.progressBoard[i][j][x][y]) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
