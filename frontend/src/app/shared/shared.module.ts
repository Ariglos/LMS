import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerComponent } from './components/indicators/spinner/spinner.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, ProgressSpinnerModule],
  exports: [TranslateModule, SpinnerComponent],
  providers: [HttpClient],
})
export class SharedModule {}
