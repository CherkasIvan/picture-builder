import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderManageButtonsComponent } from './builder-manage-buttons.component';

describe('BuilderManageButtonsComponent', () => {
  let component: BuilderManageButtonsComponent;
  let fixture: ComponentFixture<BuilderManageButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderManageButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderManageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
