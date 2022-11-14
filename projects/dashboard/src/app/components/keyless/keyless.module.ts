import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { KeylessRoutingModule } from "./keyless-routing.module";
import { KeylessComponent } from "./keyless.component";

@NgModule({
  declarations: [KeylessComponent],
  imports: [CommonModule, KeylessRoutingModule, MaterialModule],
})
export class KeylessModule {}
