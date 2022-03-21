import { Component, Input, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-builder-dropdown',
  templateUrl: './builder-dropdown.component.html',
  styleUrls: ['./builder-dropdown.component.scss'],
})
export class BuilderDropdownComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
