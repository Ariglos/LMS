import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ]
})
export class InputNumberComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() minFractionDigits: number;
  @Input() maxFractionDigits: number;
  @Input() mode: 'decimal' | 'currency';
  @Input() currency: 'PLN' | 'EUR' | 'USD'
  @Input() prefix: string
  @Input() suffix: string

  value: number;
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  onInput(event: {originalEvent: KeyboardEvent, value: number}) {
    this.propagateChange(event.value);
  }

  onBlur() {
    this.propagateTouched();
  }
}
