import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderBgSelectorComponent } from './builder-bg-selector.component';

describe('BuilderBgSelectorComponent', () => {
  let component: BuilderBgSelectorComponent;
  let fixture: ComponentFixture<BuilderBgSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderBgSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderBgSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
