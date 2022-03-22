import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-builder-panel',
  templateUrl: './builder-panel.component.html',
  styleUrls: ['./builder-panel.component.scss'],
})
export class BuilderPanelComponent {
  public mouseMove$ = fromEvent(document, 'mousemove');
  public mouseUp$ = fromEvent(document, 'mouseup');

  public draggableElements = document.getElementsByClassName(
    'builder-panel__item'
  );

  constructor() {}
}
