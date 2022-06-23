import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markFormGroupTouched } from '../../shared/utils/form';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInline = false;
  showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onToggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }

  onNotificationSuccess() {
    this.notificationService.addSuccessMessage('Test');
  }

  onNotificationInfo() {
    this.notificationService.addInfoMessage('Test');
  }

  onNotificationWarn() {
    this.notificationService.addWarnMessage('Test');
  }

  onNotificationError() {
    this.notificationService.addErrorMessage('Test');
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }

  onDisable() {
    this.form.enabled ? this.form.disable() : this.form.enable();
  }

  onSubmit() {
    if (this.form.invalid) {
      markFormGroupTouched(this.form);
    } else {
      console.log('OnSubmit');
    }
  }
}
