import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.scss']
})
export class NumberSelectorComponent implements OnInit {

  values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }



}
