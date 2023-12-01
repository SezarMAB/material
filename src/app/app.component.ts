import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {BannerComponent} from "./banner/banner.component";
import {MatDividerModule} from '@angular/material/divider';
import {ThemeManager} from "./core/theme-manager.service";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BannerComponent,
    MatDividerModule,
    MatSlideToggleModule,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  themeManager = inject(ThemeManager);
  title = 'material';

  themeChanges($event: MatSelectChange) {
    this.themeManager.switchTheme($event.value);
  }
  get isThemeSelected() {
    return !!localStorage.getItem('theme')
  }
}
