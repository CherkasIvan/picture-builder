import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuilderDataService {
  public bricks: number[] = [];
  public colors: number[] = [];

  public deleteOneElement(addedItem: any): void {
    let index = this.bricks.indexOf(addedItem);
    this.bricks.splice(index, 1);
  }

  public createBlock(): void {
    if (this.bricks.length <= 34) {
      this.bricks.push(this.bricks.length + 1);
    }
  }

  public clearField(): void {
    this.bricks.splice(0, this.bricks.length);
  }

  constructor() {}
}
