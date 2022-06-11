import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Theme} from "../../enums/Theme";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  checked:boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.initThemeBtn();
  }

  initThemeBtn() {
    this.checked = this.themeService.getCurrentTheme() === Theme.Dark;
  }

  onThemeChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.themeService.setDarkTheme();
    } else {
      this.themeService.setLightTheme();
    }
  }
}
