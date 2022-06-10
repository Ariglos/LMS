import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private messageService: MessageService,
    private translateService: TranslateService
  ) {}

  addSuccessMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: this.translateService.instant('general.notification.success'),
      detail: message,
    });
  }

  addSuccessMessageTranslated(key: string) {
    this.messageService.add({
      severity: 'success',
      summary: this.translateService.instant('general.notification.success'),
      detail: this.translateService.instant(key),
    });
  }

  addInfoMessage(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: this.translateService.instant('general.notification.info'),
      detail: message,
    });
  }

  addInfoMessageTranslated(key: string) {
    this.messageService.add({
      severity: 'info',
      summary: this.translateService.instant('general.notification.info'),
      detail: this.translateService.instant(key),
    });
  }

  addWarnMessage(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: this.translateService.instant('general.notification.warn'),
      detail: message,
    });
  }

  addWarnMessageTranslated(key: string) {
    this.messageService.add({
      severity: 'warn',
      summary: this.translateService.instant('general.notification.warn'),
      detail: this.translateService.instant(key),
    });
  }

  addErrorMessage(message: string) {
    this.messageService.add({
      severity: 'error',
      sticky: true,
      summary: this.translateService.instant('general.notification.error'),
      detail: message,
    });
  }

  addErrorMessageTranslated(key: string) {
    this.messageService.add({
      severity: 'error',
      sticky: true,
      summary: this.translateService.instant('general.notification.error'),
      detail: this.translateService.instant(key),
    });
  }
}
