import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../services/notification/notification.service";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  showSpinner = false;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onToggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }

  onNotificationSuccess() {
    this.notificationService.addSuccessMessage("Test");
  }

  onNotificationInfo() {
    this.notificationService.addInfoMessage("Test");
  }

  onNotificationWarn() {
    this.notificationService.addWarnMessage("Test");
  }

  onNotificationError() {
    this.notificationService.addErrorMessage("Test");
  }
}
