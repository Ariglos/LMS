import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-input-boolean',
  templateUrl: './input-boolean.component.html',
  styleUrls: ['./input-boolean.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBooleanComponent),
      multi: true,
    },
  ],
})
export class InputBooleanComponent implements OnInit, ControlValueAccessor {
  value: boolean;
  isDisabled: boolean;

  options: { label: string; value: boolean }[];

  constructor(private translateService: TranslateService) {
    this.options = [
      {
        label: this.translateService.instant('general.yes'),
        value: true,
      },
      {
        label: this.translateService.instant('general.no'),
        value: false,
      },
    ];
  }

  ngOnInit(): void {}

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange() {
    this.propagateChange(this.value);
  }
}
