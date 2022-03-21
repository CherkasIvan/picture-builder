import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';

import { BuilderBricksComponent } from './builder-bricks.component';
import { BuilderDropdownModule } from '../builder-dropdown/builder-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    BuilderDropdownModule,
    MatMenuModule,
    ColorPickerModule,
    FormsModule,
    NgxColorsModule,
  ],
  declarations: [BuilderBricksComponent],
  exports: [BuilderBricksComponent],
})
export class BuilderBricksModule {}
