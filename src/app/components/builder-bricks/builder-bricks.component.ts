import { Component, OnInit, ViewChild } from '@angular/core';

import { BuilderDataService } from '../../services/builder-data.service';
import { BuilderBgElSelectService } from '../../services/builder-bg-el-select.service';

@Component({
  selector: 'app-builder-bricks',
  templateUrl: './builder-bricks.component.html',
  styleUrls: ['./builder-bricks.component.scss'],
})
export class BuilderBricksComponent implements OnInit {
  public color!: string
  public bricks: number[] = this.builderService.bricks;

  addToPalette() {
    this.colorService.addToPalette();
  }

  getColors(index: any) {
    let num = this.getNumber(index);
    return this.color[num];
  }

  getNumber(data: any) {
    let i = data;
    if (i > this.color.length - 1) {
      i = i - this.color.length;
      if (i < this.color.length) {
        console.log(i);
        return i;
      } else {
        this.getNumber(i);
      }
    } else {
      return i;
    }
  }

  public identify(index: number, color: any) {
    return index;
  }

  public deleteElement(addedItem: any): void {
    this.builderService.deleteOneElement(addedItem);
  }

  constructor(
    private builderService: BuilderDataService,
    private colorService: BuilderBgElSelectService
  ) {}

  ngOnInit(): void {}
}
