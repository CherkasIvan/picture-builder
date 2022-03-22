import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-builder-nav',
  templateUrl: './builder-nav.component.html',
  styleUrls: ['./builder-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderNavComponent {
  constructor() {}
}
