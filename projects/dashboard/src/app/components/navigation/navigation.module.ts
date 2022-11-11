import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../material.module";
import { GuestsModule } from "../guests/guests.module";
import { RequestsModule } from "../requests/requests.module";
import { WorkOrdersModule } from "../work-orders/work-orders.module";
import { NavigationComponent } from "./navigation.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
  declarations: [NavigationComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    GuestsModule,
    RequestsModule,
    WorkOrdersModule
  ],
  exports: [NavigationComponent, SidenavComponent],
})
export class NavigationModule {}
