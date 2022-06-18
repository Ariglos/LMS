import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles/styles.component';
import { SharedComponent } from './shared/shared.component';
import { InfoComponent } from './info.component';
import {InfoRoutingModule} from "./info-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [StylesComponent, SharedComponent, InfoComponent],
  imports: [CommonModule, InfoRoutingModule, SharedModule],
})
export class InfoModule {}
