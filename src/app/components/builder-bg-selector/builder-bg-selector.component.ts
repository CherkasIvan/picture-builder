import { Component, OnInit } from '@angular/core';

import { BuilderBgSelectService } from '../../services/builder-bg-select.service';
import { Background } from '../../interface/background';

@Component({
  selector: 'app-builder-bg-selector',
  templateUrl: './builder-bg-selector.component.html',
  styleUrls: ['./builder-bg-selector.component.scss'],
})
export class BuilderBgSelectorComponent implements OnInit {
  public backgrounds!: Array<Background>;
  public activeBackground!: Background;

 public changeBackground(background: Background): void {
    this.activeBackground = background;
    localStorage.setItem('background', JSON.stringify(this.activeBackground));
    document.body.style.background = background.background;
    this.selectBgService.changeColorTheme(background);
  }

  constructor(private selectBgService: BuilderBgSelectService) {}

  ngOnInit(): void {
    this.backgrounds = this.selectBgService.getBackgrounds();
    this.activeBackground =
      JSON.parse(localStorage.getItem('background') as string) ||
      this.backgrounds[0];
    this.changeBackground(this.activeBackground);
  }


}
