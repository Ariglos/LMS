import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerComponent } from './components/indicators/spinner/spinner.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ButtonComponent } from './components/buttons/button/button.component';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [SpinnerComponent, ButtonComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    MatSlideToggleModule,
    ButtonModule,
  ],
  exports: [TranslateModule, SpinnerComponent, ButtonComponent],
  providers: [HttpClient],
})
export class SharedModule {}
