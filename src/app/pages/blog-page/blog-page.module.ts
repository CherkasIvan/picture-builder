import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BlogPageComponent],
  exports: [BlogPageComponent],
})
export class BlogPageModule {}
