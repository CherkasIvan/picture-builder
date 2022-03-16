import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';

import { BuilderDataService } from '../../services/builder-data.service';

@Component({
  selector: 'app-builder-manage-buttons',
  templateUrl: './builder-manage-buttons.component.html',
  styleUrls: ['./builder-manage-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderManageButtonsComponent implements OnInit {
  public addNewBrick(): void {
    this.builderService.createBlock();
  }

  public clearArrBricks(): void {
    this.builderService.clearField();
  }

  constructor(private builderService: BuilderDataService) {}

  ngOnInit(): void {}
}
