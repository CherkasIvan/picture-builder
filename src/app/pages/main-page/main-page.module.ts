import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';
import { BuilderPanelModule } from 'src/app/components/builder-panel/builder-panel.module';

@NgModule({
  imports: [CommonModule, BuilderPanelModule],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
