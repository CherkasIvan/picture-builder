import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';

import { BuilderBricksComponent } from './builder-bricks.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxColorsModule,
  ],
  declarations: [BuilderBricksComponent],
  exports: [BuilderBricksComponent],
})
export class BuilderBricksModule {}
