import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export type IconPos = 'left' | 'right'
export type Severity = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() disabled: boolean;
  @Input() iconPos: IconPos;
  @Input() severity: Severity;
  @Input() type: ButtonType;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.type = 'button';
    this.label = 'test';
    this.iconPos = 'left';
  }

  ngOnInit(): void {
  }

  getSeverityClass() {
    return `p-button-${this.severity}`;
  }
}
