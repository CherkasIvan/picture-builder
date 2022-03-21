import { Component, OnInit, ViewChild } from '@angular/core';

import { BuilderDataService } from '../../services/builder-data.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-builder-bricks',
  templateUrl: './builder-bricks.component.html',
  styleUrls: ['./builder-bricks.component.scss'],
})
export class BuilderBricksComponent implements OnInit {
  public color: string = '#EC407A';
  public item: any;
  public bricks: number[] = this.builerdService.bricks;

  public deleteElement(addedItem: any): void {
    this.builerdService.deleteOneElement(addedItem);
  }

  constructor(private builerdService: BuilderDataService) {}

  ngOnInit(): void {}
}
