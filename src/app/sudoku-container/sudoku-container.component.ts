/* Core Imports */
import { Component, OnInit } from '@angular/core';

/* Classes */
import { Game } from '../game';

@Component({
  selector: 'app-sudoku-container',
  templateUrl: './sudoku-container.component.html',
  styleUrls: ['./sudoku-container.component.scss']
})
export class SudokuContainerComponent implements OnInit {

  game: Game;
  hintsEnabled: boolean;

  constructor() {
    this.hintsEnabled = false;
    this.game = new Game();
  }

  ngOnInit() { }

  _reset = () => {
    this.game.reset();
  }

  _new = () => {
    console.log('Not yet implemented');
  }

  _toggleHints = () => {
    this.hintsEnabled = !this.hintsEnabled;
  }

}
