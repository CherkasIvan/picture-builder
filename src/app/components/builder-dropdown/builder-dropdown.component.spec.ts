import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderDropdownComponent } from './builder-dropdown.component';

describe('BuilderDropdownComponent', () => {
  let component: BuilderDropdownComponent;
  let fixture: ComponentFixture<BuilderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
