import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BuilderNavComponent } from './builder-nav.component';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BuilderNavComponent],
  exports: [BuilderNavComponent],
})
export class BuilderNavModule {}
