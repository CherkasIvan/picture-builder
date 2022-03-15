import { Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { switchMap, takeUntil, map, tap, last } from 'rxjs/operators';

@Component({
  selector: 'app-builder-panel',
  templateUrl: './builder-panel.component.html',
  styleUrls: ['./builder-panel.component.scss'],
})
export class BuilderPanelComponent implements OnInit {
  public draggableElements = document.getElementsByClassName(
    'builder-panel__item'
  );
  public mouseDown$ = fromEvent(this.draggableElements, 'mousedown');
  public mouseMove$ = fromEvent(this.draggableElements, 'mousemove');
  public mouseUp$ = fromEvent(this.draggableElements, 'mouseup');
  public dragStart$ = this.mouseDown$;

  public dragMove$ = this.dragStart$.pipe(
    switchMap((start: any) =>
      this.mouseMove$.pipe(
        // we transform the mouseDown and mouseMove event to get the necessary information
        map((moveEvent: any) => ({
          originalEvent: moveEvent,
          deltaX: moveEvent.pageX - start.pageX,
          deltaY: moveEvent.pageY - start.pageY,
          startOffsetX: start.offsetX,
          startOffsetY: start.offsetY,
        })),
        takeUntil(this.mouseUp$)
      )
    )
  );

  // this.dragMove$.subscribe((move:any) => {
  //   const offsetX = move.originalEvent.x - move.startOffsetX;
  //   const offsetY = move.originalEvent.y - move.startOffsetY;
  //   this.draggableElement.style.left = offsetX + 'px';
  //   this.draggableElement.style.top = offsetY + 'px';
  // });



  constructor() {}

  ngOnInit(): void {}
}
