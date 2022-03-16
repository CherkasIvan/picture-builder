import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';
import { BlogPageRoutingModule } from './blog-page-routing.module';

@NgModule({
  imports: [CommonModule, BlogPageRoutingModule],
  declarations: [BlogPageComponent],
  exports: [BlogPageComponent],
})
export class BlogPageModule {}
