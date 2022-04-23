import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from '../enums/Theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeLink: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.themeLink = document.getElementById('app-theme') as HTMLLinkElement;
  }

  initializeTheme() {
    const theme = this.getThemeFromLocalStorage();

    if (theme == null) {
      this.setLightTheme();
    } else {
      this.setTheme(theme);
    }
  }

  setTheme(theme: Theme) {
    this.themeLink.href = theme;
    this.saveThemeInLocalStorage(theme);
  }

  setLightTheme() {
    this.themeLink.href = Theme.Light;
    this.saveThemeInLocalStorage(Theme.Light);
  }

  setDarkTheme() {
    this.themeLink.href = Theme.Dark;
    this.saveThemeInLocalStorage(Theme.Dark);
  }

  getCurrentTheme(): Theme | null {
    return this.getThemeFromLocalStorage();
  }

  private saveThemeInLocalStorage(theme: Theme) {
    localStorage.setItem('theme', theme);
  }

  private getThemeFromLocalStorage(): Theme | null {
    const theme = localStorage.getItem('theme') ?? "";
    return Theme.parse(theme);
  }
}
