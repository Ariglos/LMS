import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerComponent } from './components/indicators/spinner/spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonModule } from 'primeng/button';
import { FormFieldComponent } from './components/controls/form-field/form-field.component';
import { InputComponent } from './components/controls/input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {HttpLoaderFactory} from "../app.module";
import { InputPasswordComponent } from './components/controls/input-password/input-password.component';
import {PasswordModule} from "primeng/password";

@NgModule({
  declarations: [
    SpinnerComponent,
    ButtonComponent,
    FormFieldComponent,
    InputComponent,
    InputPasswordComponent,
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    MatSlideToggleModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
      },
      extend: true,
    }),
    PasswordModule,
  ],
  exports: [
    TranslateModule,
    SpinnerComponent,
    ButtonComponent,
    FormFieldComponent,
    InputComponent,
    InputPasswordComponent,
  ],
  providers: [HttpClient, TranslateService],
})
export class SharedModule {}
