import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderPanelComponent } from './builder-panel.component';
import { BuilderManageButtonsModule } from '../builder-manage-buttons/builder-manage-buttons.module';
import { BuilderBricksModule } from '../builder-bricks/builder-bricks.module';

@NgModule({
  imports: [CommonModule, BuilderManageButtonsModule, BuilderBricksModule],
  declarations: [BuilderPanelComponent],
  exports: [BuilderPanelComponent],
})
export class BuilderPanelModule {}
