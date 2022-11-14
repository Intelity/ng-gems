import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { WorkOrdersRoutingModule } from "./work-orders-routing.module";
import { WorkOrdersComponent } from "./work-orders.component";

@NgModule({
  declarations: [WorkOrdersComponent],
  imports: [CommonModule, WorkOrdersRoutingModule, MaterialModule],
})
export class WorkOrdersModule {}
