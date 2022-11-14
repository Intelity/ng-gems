import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { RoomsRoutingModule } from "./rooms-routing.module";
import { RoomsComponent } from "./rooms.component";

@NgModule({
  declarations: [RoomsComponent],
  imports: [CommonModule, RoomsRoutingModule, MaterialModule],
})
export class RoomsModule {}
