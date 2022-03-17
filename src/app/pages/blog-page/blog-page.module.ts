import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BuilderInfinityPanelModule } from '../../components/builder-infinity-panel/builder-infinity-panel.module';

@NgModule({
  imports: [CommonModule, BlogPageRoutingModule, BuilderInfinityPanelModule],
  declarations: [BlogPageComponent],
  exports: [BlogPageComponent],
})
export class BlogPageModule {}
