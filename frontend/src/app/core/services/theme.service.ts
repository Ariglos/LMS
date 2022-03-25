import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from '../enums/Theme';
import { themes } from '../constants/Constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeLink: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.themeLink = document.getElementById('app-theme') as HTMLLinkElement;
  }

  switchTheme(theme: Theme) {
    switch (theme) {
      case Theme.Light:
        this.themeLink.href = themes.light;
        break;
      case Theme.Dark:
        this.themeLink.href = themes.dark;
        break;
      default:
        this.themeLink.href = themes.light;
    }
  }

  setLightTheme() {
    this.themeLink.href = themes.light;
  }

  setDarkTheme() {
    this.themeLink.href = themes.dark;
  }
}
