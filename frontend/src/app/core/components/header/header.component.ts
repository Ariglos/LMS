import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Theme } from '../../enums/Theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themeBtnChecked: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.initThemeBtn();
  }

   initThemeBtn() {
    this.themeBtnChecked = this.themeService.getCurrentTheme() === Theme.Dark;
  }

   onThemeChange(event: any) {
    if (event.checked) {
      this.themeService.setDarkTheme();
    } else {
      this.themeService.setLightTheme();
    }
  }
}
