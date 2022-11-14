import { Component, OnInit } from "@angular/core";
import { first } from "rxjs";
import {
  GemsNotification,
  NotificationService,
  NotificationStatus,
  NotificationType,
} from "../../services/notification.service";
import { User, UserService } from "../../services/user.service";

@Component({
  selector: "gems-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.scss"],
})
export class ToolBarComponent implements OnInit {
  loggedInUser!: User;
  lateServicesRequest: GemsNotification[] = [];
  lateWorkOrders: GemsNotification[] = [];
  pendingServicesRequest: GemsNotification[] = [];
  pendingWorkOrders: GemsNotification[] = [];

  hasNotifications = false;
  constructor(
    private _userService: UserService,
    private _notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this._userService
      .getUser()
      .pipe(first())
      .subscribe((user) => (this.loggedInUser = user));

    this._notificationService
      .getNotifications()
      .pipe(first())
      .subscribe((notifications) => {
        if (!notifications) {
          return;
        }

        this.hasNotifications = notifications.length > 0;
        notifications.forEach((n) => {
          if (
            n.type === NotificationType.request &&
            n.status === NotificationStatus.late
          ) {
            this.lateServicesRequest.push(n);
          } else if (
            n.type === NotificationType.workOrder &&
            n.status === NotificationStatus.late
          ) {
            this.lateWorkOrders.push(n);
          } else if (
            n.type === NotificationType.request &&
            n.status === NotificationStatus.pending
          ) {
            this.pendingServicesRequest.push(n);
          } else {
            this.pendingWorkOrders.push(n);
          }
        });
      });
  }
}
