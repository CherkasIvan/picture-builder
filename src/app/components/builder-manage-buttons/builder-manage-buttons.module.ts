import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderManageButtonsComponent } from './builder-manage-buttons.component';
import { BuilderDataService } from '../../services/builder-data.service';

@NgModule({
  imports: [CommonModule],
  declarations: [BuilderManageButtonsComponent],
  exports: [BuilderManageButtonsComponent],
  providers: [BuilderDataService]
})
export class BuilderManageButtonsModule {}
