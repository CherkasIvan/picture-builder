import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderManageButtonsComponent } from './builder-manage-buttons.component';
import { BuilderDataService } from '../../services/builder-data.service';
import { BuilderBgSelectorModule } from '../builder-bg-selector/builder-bg-selector.module';

@NgModule({
  imports: [CommonModule, BuilderBgSelectorModule],
  declarations: [BuilderManageButtonsComponent],
  exports: [BuilderManageButtonsComponent],
  providers: [BuilderDataService],
})
export class BuilderManageButtonsModule {}
