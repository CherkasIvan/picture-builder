import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder-infinity-panel',
  templateUrl: './builder-infinity-panel.component.html',
  styleUrls: ['./builder-infinity-panel.component.scss'],
})
export class BuilderInfinityPanelComponent implements OnInit {
  listArray: string[] = [];
  sum = 20;
  direction = '';

  constructor() {
    this.appendItems();
  }

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);

    this.sum += 20;
    this.appendItems();

    this.direction = 'scroll down';
  }

  onScrollUp(ev: any) {
    console.log('scrolled up!', ev);
    this.sum += 20;
    this.prependItems();

    this.direction = 'scroll up';
  }

  appendItems() {
    this.addItems('push');
  }

  prependItems() {
    this.addItems('unshift');
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if (_method === 'push') {
        this.listArray.push([i].join(''));
      } else if (_method === 'unshift') {
        this.listArray.unshift([i].join(''));
      }
    }
  }

  ngOnInit(): void {}
}
