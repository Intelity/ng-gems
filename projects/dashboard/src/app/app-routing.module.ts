import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "guests",
        loadChildren: () =>
          import("./components/guests/guests.module").then(
            (m) => m.GuestsModule
          ),
      },
      {
        path: "requests",
        loadComponent: () =>
          import("./components/requests/requests.component").then(
            (m) => m.RequestsComponent
          ),
      },
      {
        path: "work-orders",
        loadChildren: () =>
          import("./components/work-orders/work-orders.module").then(
            (m) => m.WorkOrdersModule
          ),
      },
      {
        path: "rooms",
        loadChildren: () =>
          import("./components/rooms/rooms.module").then((m) => m.RoomsModule),
      },
      {
        path: "keyless",
        loadChildren: () =>
          import("./components/keyless/keyless.module").then(
            (m) => m.KeylessModule
          ),
      },
      {
        path: "tablets",
        loadChildren: () =>
          import("./components/tablets/tablets.module").then(
            (m) => m.TabletsModule
          ),
      },
      {
        path: "events",
        loadChildren: () =>
          import("./components/events/events.module").then(
            (m) => m.EventsModule
          ),
      },
      {
        path: "messages",
        loadChildren: () =>
          import("./components/messages/messages.module").then(
            (m) => m.MessagesModule
          ),
      },
      {
        path: "user-management",
        loadChildren: () =>
          import("./components/user-management/user-management.module").then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: "reports",
        loadChildren: () =>
          import("./components/reports/reports.module").then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./components/settings/settings.module").then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
