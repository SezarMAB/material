import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {RouterLink, RouterOutlet, Routes} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ThemeManager} from "./core/theme-manager.service";
import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    AsyncPipe, RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  routes: Routes = routes;
  themeManager = inject(ThemeManager);
  title = 'material';
  showSwitchTheme = true;
  themeChanges($event: MatSelectChange) {
    this.themeManager.switchTheme($event.value);
  }
  get isThemeSelected() {
    return !!localStorage.getItem('theme')
  }
}
