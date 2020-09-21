import { Injectable } from '@angular/core';

@Injectable()
export class SudokuService {

  constructor() { }

  cloneBoard = (board) => {
    return this.arrayClone(board);
  }

  maskBoard = (board, difficulty) => {
    return board;
  }

  getNewBoard = () => {
    return [
      [
        [
          [2, null, null],
          [null, 6, 7],
          [null, null, 8]
        ],
        [
          [5, null, 1],
          [2, null, null],
          [null, 3, null]
        ],
        [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ]
      ],
      [
        [
          [null, null, null],
          [null, null, null],
          [1, null, 9]
        ],
        [
          [null, null, null],
          [null, null, 4],
          [null, 7, null]
        ],
        [
          [2, 5, null],
          [9, 7, null],
          [null, 6, null]
        ]
      ],
      [
        [
          [null, null, null],
          [3, null, 5],
          [null, null, null]
        ],
        [
          [null, null, null],
          [8, null, null],
          [1, 9, 6]
        ],
        [
          [null, null, null],
          [null, 9, null],
          [null, null, null]
        ]
      ]
    ];
  }

  arrayClone = (array) => {
    let i, copy;

    if (Array.isArray(array)) {
      copy = array.slice(0);
      for ( i = 0; i < copy.length; i++ ) {
        copy[i] = this.arrayClone(copy[i]);
      }
      return copy;
    } else if (typeof(array) === 'object' && array !== null) {
      throw new Error('Cannot clone array containing an object!');
    } else {
      return array;
    }
  }
}
