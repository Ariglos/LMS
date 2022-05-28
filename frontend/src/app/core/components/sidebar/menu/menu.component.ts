import { Component, OnInit } from '@angular/core';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../../../models/menu-item';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  expandedMode = true;
  faHouseLaptop = faHouseLaptop;

  menuOptions: MenuItem[];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.menuOptions = [
      {
        name: this.translateService.instant('menu.home'),
        iconClass: 'pi pi-home',
        link: '/home',
      },
      {
        name: this.translateService.instant('menu.finances'),
        iconClass: 'pi pi-wallet',
        link: '/finances',
      },
      {
        name: this.translateService.instant('menu.diet'),
        iconClass: 'pi pi-heart',
        link: '/diet',
      },
      {
        name: this.translateService.instant('menu.car'),
        iconClass: 'pi pi-car',
        link: '/car',
      },
      {
        name: this.translateService.instant('menu.users'),
        iconClass: 'pi pi-users',
        link: '/users',
      },
      {
        name: this.translateService.instant('menu.settings'),
        iconClass: 'pi pi-cog',
        link: '/settings',
      },
      {
        name: this.translateService.instant('menu.info'),
        iconClass: 'pi pi-info-circle',
        link: '/info'
      },
      {
        name: this.translateService.instant('menu.log-in'),
        iconClass: 'pi pi-sign-in',
        link: '/login',
      },
    ];
  }

  onExpandBtnClick() {
    this.expandedMode = !this.expandedMode;
  }
}
