import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnComponent } from '../btn/btn.component';
import { ToggleComponent } from '../toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BtnComponent, ToggleComponent],
  exports: [BtnComponent, ToggleComponent]
})
export class SharedModule { }
