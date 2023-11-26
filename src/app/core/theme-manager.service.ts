import {Injectable} from '@angular/core';
import {fromEvent, map, merge, shareReplay, startWith, Subject, tap} from "rxjs";

export type Themes = 'light' | 'dark';
export type ThemeUrls = `${Themes}-theme.css`;


@Injectable({
  providedIn: 'root'
})
export class ThemeManager {
  // Detect which theme user prefers
  #preferenceQuery = matchMedia(`(prefers-color-scheme: light)`);
  #themeSwitcher = new Subject<Themes>();
  // Listen to the preference change
  #userEnvThemePreference = fromEvent<MediaQueryList>(this.#preferenceQuery, 'change')
    .pipe(
      startWith(this.#preferenceQuery),
      map(resolvePreferredTheme));

  theme$ = merge(
    this.#userEnvThemePreference,
    this.#themeSwitcher
  ).pipe(
    // Load the corresponding css file (Theme)
    tap(theme => loadTheme(getThemeLinkElement(), theme)),
    shareReplay()
  )

  constructor() {
  }

  switchTheme(themeName: Themes) {
    localStorage.setItem('theme', themeName)
    this.#themeSwitcher.next(themeName);
  }

  detectThemeAutomatically() {
    localStorage.removeItem('theme')
    this.#themeSwitcher.next(resolvePreferredTheme(this.#preferenceQuery));
  }
}

function resolvePreferredTheme(query: MediaQueryList): Themes {
  const themeName = localStorage.getItem('theme') as Themes;
  if (themeName) {
    return themeName;
  }
  return query.matches ? 'light' : 'dark';
}

function getThemeLinkElement(): HTMLLinkElement {
  const existingLinkEl = document.head.querySelector<HTMLLinkElement>('#appTheme');
  if (existingLinkEl) {
    return existingLinkEl;
  }
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.setAttribute('id', 'appTheme');
  document.head.querySelector(`link[rel="stylesheet"]:last-of-type`)?.after(linkEl);
  return linkEl;
}

function loadTheme(linkEl: HTMLLinkElement, theme: Themes) {
  linkEl.setAttribute('href', resolveThemeUrl(theme));
}

function resolveThemeUrl(themeName: Themes): ThemeUrls {
  return `${themeName}-theme.css`;

}
