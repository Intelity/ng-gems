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
        loadChildren: () =>
          import("./components/requests/requests.module").then(
            (m) => m.RequestsModule
          ),
      },
      {
        path: "work-orders",
        loadChildren: () =>
          import("./components/work-orders/work-orders.module").then(
            (m) => m.WorkOrdersModule
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
