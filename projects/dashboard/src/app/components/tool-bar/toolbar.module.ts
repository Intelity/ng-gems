import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { ToolBarComponent } from "./tool-bar.component";

@NgModule({
  declarations: [ToolBarComponent],
  imports: [CommonModule, MaterialModule],
  exports:[ToolBarComponent]
})
export class ToolbarModule {}
