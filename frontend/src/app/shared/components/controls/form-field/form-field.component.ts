import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() label: string;
  @Input() isInline: boolean;
  @Input() labelWidth: string;
  @Input() control: AbstractControl;

  constructor() {
    this.labelWidth = '8rem';
  }

  ngOnInit(): void {
  }

  get errorKey() {
    return this.control.errors && Object.keys(this.control.errors)[0];
  }

  hasErrors(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }
}
