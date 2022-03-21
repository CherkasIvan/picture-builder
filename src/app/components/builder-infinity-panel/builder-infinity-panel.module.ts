import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BuilderInfinityPanelComponent } from './builder-infinity-panel.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [CommonModule, InfiniteScrollModule],
  declarations: [BuilderInfinityPanelComponent],
  exports: [BuilderInfinityPanelComponent],
})
export class BuilderInfinityPanelModule {}

platformBrowserDynamic().bootstrapModule(BuilderInfinityPanelModule);
