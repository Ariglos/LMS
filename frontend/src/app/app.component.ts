import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService
  ) {
    primengConfig.ripple = true;
    themeService.initializeTheme();
  }
}
