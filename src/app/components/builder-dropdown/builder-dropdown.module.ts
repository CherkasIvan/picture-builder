import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BuilderDropdownComponent } from './builder-dropdown.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  declarations: [BuilderDropdownComponent],
  exports: [BuilderDropdownComponent],
})
export class BuilderDropdownModule {}
