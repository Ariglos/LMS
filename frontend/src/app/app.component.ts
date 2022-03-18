import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { Theme } from './core/enums/Theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private themeService: ThemeService) {}

  onClick() {
    let random = Math.random();
    let theme = Theme.Light;
    if (random > 0.5) {
      theme = Theme.Dark;
    }

    this.themeService.switchTheme(theme);
  }
}
