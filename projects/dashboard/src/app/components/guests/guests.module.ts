import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { GuestsComponent } from "./guests.component";

@NgModule({
  declarations: [GuestsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [GuestsComponent],
})
export class NavigationModule {}
