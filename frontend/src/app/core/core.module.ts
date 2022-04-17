import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DefaultLayoutComponent } from './components/layout/default-layout/default-layout.component';
import { FullWidthLayoutComponent } from './components/layout/full-width-layout/full-width-layout.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/sidebar/menu/menu.component';
import { MenuItemComponent } from './components/sidebar/menu/menu-item/menu-item.component';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultLayoutComponent,
    FullWidthLayoutComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  imports: [
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
    ToggleButtonModule,
    FontAwesomeModule,
    ButtonModule,
  ],
})
export class CoreModule {}
