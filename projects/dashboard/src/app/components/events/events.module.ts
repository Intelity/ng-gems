import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";

@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule, EventsRoutingModule, MaterialModule],
})
export class EventsModule {}
