import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';
import { BuilderPanelModule } from '../../components/builder-panel/builder-panel.module';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  imports: [CommonModule, BuilderPanelModule, MainPageRoutingModule],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
