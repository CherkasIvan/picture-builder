import { Component, OnInit } from '@angular/core';

import { BuilderBgSelectService } from '../../services/builder-bg-select.service';
import { Background } from '../../interface/background';

@Component({
  selector: 'app-builder-bg-selector',
  templateUrl: './builder-bg-selector.component.html',
  styleUrls: ['./builder-bg-selector.component.scss'],
})
export class BuilderBgSelectorComponent {
  public backgrounds: Array<Background>;
  public activeBackground: Background;

  constructor(private celectBgService: BuilderBgSelectService) {
    this.backgrounds = this.celectBgService.getBackgrounds();
    this.activeBackground =
      JSON.parse(localStorage.getItem('background') as string) ||
      this.backgrounds[0];
    this.changeBackground(this.activeBackground);
  }

  changeBackground(background: Background): void {
    this.activeBackground = background;
    localStorage.setItem('background', JSON.stringify(this.activeBackground));
    document.body.style.background = background.background;
    this.celectBgService.changeColorTheme(background);
  }
}
