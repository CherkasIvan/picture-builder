import { Component, OnInit } from '@angular/core';

import { BuilderDataService } from '../../services/builder-data.service';

@Component({
  selector: 'app-builder-bricks',
  templateUrl: './builder-bricks.component.html',
  styleUrls: ['./builder-bricks.component.scss'],
})
export class BuilderBricksComponent implements OnInit {
  public bricks: number[] = this.builerdService.bricks;

  public deleteElement(addedItem: any): void {
    this.builerdService.deleteOneElement(addedItem);
  }

  public selectColor(addedItem: any): void {
    this.builerdService.deleteOneElement(addedItem);
  }

  constructor(private builerdService: BuilderDataService) {}

  ngOnInit(): void {}
}
