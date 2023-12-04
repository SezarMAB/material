import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeManager} from "../core/theme-manager.service";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";

@Component({
  selector: 'app-them-test',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule],
  templateUrl: './them-test.component.html',
  styleUrl: './them-test.component.scss'
})
export class ThemTestComponent {
  // themeManager = inject(ThemeManager);
  // title = 'material';
  //
  // themeChanges($event: MatSelectChange) {
  //   this.themeManager.switchTheme($event.value);
  // }
  // get isThemeSelected() {
  //   return !!localStorage.getItem('theme')
  // }
}
