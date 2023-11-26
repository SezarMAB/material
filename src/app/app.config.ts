import {ApplicationConfig, inject, PLATFORM_INITIALIZER} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {ThemeManager} from "./core/theme-manager.service";
import {MATERIAL_SANITY_CHECKS} from "@angular/material/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    {
      provide: PLATFORM_INITIALIZER,
      useFactory: () => inject(ThemeManager).theme$,
    },
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: {
        theme: false
      }

    }
  ]
};
