import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderInfinityPanelComponent } from './builder-infinity-panel.component';

describe('BuilderInfinityPanelComponent', () => {
  let component: BuilderInfinityPanelComponent;
  let fixture: ComponentFixture<BuilderInfinityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderInfinityPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderInfinityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
