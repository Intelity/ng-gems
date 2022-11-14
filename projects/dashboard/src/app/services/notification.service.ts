import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor() {}
  getNotifications(): Observable<GemsNotification[]> {
    const notifications: GemsNotification[] = [
      {
        id: 1,
        status: NotificationStatus.late,
        type: NotificationType.request,
      },
      {
        id: 2,
        status: NotificationStatus.late,
        type: NotificationType.request,
      },
      {
        id: 3,
        status: NotificationStatus.pending,
        type: NotificationType.request,
      },
      {
        id: 4,
        status: NotificationStatus.pending,
        type: NotificationType.workOrder,
      },
      {
        id: 5,
        status: NotificationStatus.late,
        type: NotificationType.workOrder,
      },
    ];

    return of(notifications);
  }
}

// mocking
export interface GemsNotification {
  id: number;
  type: NotificationType;
  status: NotificationStatus;
}

export enum NotificationType {
  workOrder = "work-order",
  request = "request",
}

export enum NotificationStatus {
  late = "late",
  pending = "pending",
}
