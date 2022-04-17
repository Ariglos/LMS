import { Component, OnInit } from '@angular/core';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../../../models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  expandedMode = true;
  faHouseLaptop = faHouseLaptop;

  menuOptions: MenuItem[];

  constructor() {
    this.menuOptions = [
      {
        name: 'Home',
        iconClass: 'pi pi-home',
        link: '/home',
      },
      {
        name: 'Finances',
        iconClass: 'pi pi-wallet',
        link: '/finances',
      },
      {
        name: 'Diet',
        iconClass: 'pi pi-heart',
        link: '/diet',
      },
      {
        name: 'Car',
        iconClass: 'pi pi-car',
        link: '/car',
      },
      {
        name: 'Users',
        iconClass: 'pi pi-users',
        link: '/users',
      },
      {
        name: 'Settings',
        iconClass: 'pi pi-cog',
        link: '/settings',
      },
      {
        name: 'Log in',
        iconClass: 'pi pi-sign-in',
        link: '/login',
      },
    ];
  }

  ngOnInit(): void {}

  onExpandBtnClick() {
    this.expandedMode = !this.expandedMode;
  }
}
