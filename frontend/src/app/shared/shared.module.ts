import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [TranslateModule],
  providers: [HttpClient],
})
export class SharedModule {}
