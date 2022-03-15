import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderNavComponent } from './builder-nav.component';

describe('BuilderNavComponent', () => {
  let component: BuilderNavComponent;
  let fixture: ComponentFixture<BuilderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
