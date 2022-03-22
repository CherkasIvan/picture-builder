import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { BuilderInfinityPanelComponent } from './builder-infinity-panel.component';

@NgModule({
  imports: [CommonModule, InfiniteScrollModule],
  declarations: [BuilderInfinityPanelComponent],
  exports: [BuilderInfinityPanelComponent],
})
export class BuilderInfinityPanelModule {}

platformBrowserDynamic().bootstrapModule(BuilderInfinityPanelModule);
