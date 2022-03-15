import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderBricksComponent } from './builder-bricks.component';



@NgModule({
  imports: [CommonModule],
  declarations: [BuilderBricksComponent],
  exports: [BuilderBricksComponent],
})
export class BuilderBricksModule { }
