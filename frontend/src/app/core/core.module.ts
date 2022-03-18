import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "../app-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DefaultLayoutComponent } from './components/layout/default-layout/default-layout.component';
import { FullWidthLayoutComponent } from './components/layout/full-width-layout/full-width-layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultLayoutComponent,
    FullWidthLayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    FlexLayoutModule,
    CommonModule,
  ]
})
export class CoreModule { }
