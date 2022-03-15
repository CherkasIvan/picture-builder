import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderBricksComponent } from './builder-bricks.component';

describe('BuilderBricksComponent', () => {
  let component: BuilderBricksComponent;
  let fixture: ComponentFixture<BuilderBricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderBricksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderBricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
