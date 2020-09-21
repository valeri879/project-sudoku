import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() title: string;
  @Input() type: string;
  @Input() click: () => void;
  @Input() toggleValue: boolean;

  constructor() { }

  ngOnInit() {
  }

  _click = () => {
    if (!this.disabled) {
      this.click();
    }
  }

  _classes = () => {
    const possibleClasses = [
      !this.disabled ? `btn-${this.type}` : null,
      this.disabled ? 'disabled' : null,
      this.toggleValue ? 'toggle-on' : 'toggle-off'
    ];
    return possibleClasses.filter((cls) => cls !== null).join(' ');
  }
}
