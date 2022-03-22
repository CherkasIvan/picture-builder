import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {
  constructor() {}
}
