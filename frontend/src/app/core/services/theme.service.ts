import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from '../enums/Theme';
import { themes } from '../constants/Constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: Theme) {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    switch (theme) {
      case Theme.Light:
        themeLink.href = themes.light;
        break;
      case Theme.Dark:
        themeLink.href = themes.dark;
        break;
      default:
        themeLink.href = themes.light;
    }
  }
}
