import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { GuestsRoutingModule } from "./guests-routing.module";
import { GuestsComponent } from "./guests.component";

@NgModule({
  declarations: [GuestsComponent],
  imports: [CommonModule, GuestsRoutingModule, MaterialModule]
})
export class GuestsModule {}
