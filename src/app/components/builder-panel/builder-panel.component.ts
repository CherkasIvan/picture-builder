import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { switchMap, takeUntil, map, tap, last } from 'rxjs/operators';

// const mouseMove$ = fromEvent(document, 'mousemove');
// const mouseUp$ = fromEvent(document, 'mouseup');

// const draggableElements = document.getElementsByClassName(
//   'builder-panel__item'
// );
// Array.from(draggableElements).forEach(createDraggableElement);

// function createDraggableElement(element: any) {
//   console.log(draggableElements)
//   const mouseDown$ = fromEvent(element, 'mousedown');

//   const dragStart$ = mouseDown$;
//   const dragMove$ = dragStart$.pipe(
//     switchMap((start: any) =>
//       mouseMove$.pipe(
//         map((moveEvent: any) => ({
//           originalEvent: moveEvent,
//           deltaX: moveEvent.pageX - start.pageX,
//           deltaY: moveEvent.pageY - start.pageY,
//           startOffsetX: start.offsetX,
//           startOffsetY: start.offsetY,
//         })),
//         takeUntil(mouseUp$)
//       )
//     )
//   );
//   const dragEnd$ = dragStart$.pipe(
//     switchMap((start: any) =>
//       mouseMove$.pipe(
//         map((moveEvent: any) => ({
//           originalEvent: moveEvent,
//           deltaX: moveEvent.pageX - start.pageX,
//           deltaY: moveEvent.pageY - start.pageY,
//           startOffsetX: start.offsetX,
//           startOffsetY: start.offsetY,
//         })),
//         takeUntil(mouseUp$),
//         last()
//       )
//     )
//   );

//   combineLatest([
//     dragStart$.pipe(
//       tap((event) => {
//         element.dispatchEvent(
//           new CustomEvent('mydragstart', { detail: event })
//         );
//       })
//     ),
//     dragMove$.pipe(
//       tap((event) => {
//         element.dispatchEvent(new CustomEvent('mydragmove', { detail: event }));
//       })
//     ),
//     dragEnd$.pipe(
//       tap((event) => {
//         element.dispatchEvent(new CustomEvent('mydragend', { detail: event }));
//       })
//     ),
//   ]).subscribe();

//   dragMove$.subscribe((move: any) => {
//     const offsetX = move.originalEvent.x - move.startOffsetX;
//     const offsetY = move.originalEvent.y - move.startOffsetY;
//     element.style.left = offsetX + 'px';
//     element.style.top = offsetY + 'px';
//   });
// }

// Array.from(draggableElements).forEach((element, i) => {
//   element.addEventListener('mydragstart', () =>
//     console.log(`mydragstart on element #${i}`)
//   );

//   element.addEventListener('mydragmove', (event: any) =>
//     console.log(
//       `mydragmove on element #${i}`,
//       `delta: (${event.detail.deltaX}, ${event.detail.deltaY})`
//     )
//   );

//   element.addEventListener('mydragend', (event: any) =>
//     console.log(
//       `mydragend on element #${i}`,
//       `delta: (${event.detail.deltaX}, ${event.detail.deltaY})`
//     )
//   );
// });

@Component({
  selector: 'app-builder-panel',
  templateUrl: './builder-panel.component.html',
  styleUrls: ['./builder-panel.component.scss'],
})
export class BuilderPanelComponent implements OnInit {
  public mouseMove$ = fromEvent(document, 'mousemove');
  public mouseUp$ = fromEvent(document, 'mouseup');

  public draggableElements = document.getElementsByClassName(
    'builder-panel__item'
  );

  constructor() {
    // let el: any;
    // let c: any = Array.from(this.draggableElements).forEach(el);
  }

  ngOnInit(): void {}
}
