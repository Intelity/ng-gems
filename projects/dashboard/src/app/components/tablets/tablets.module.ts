import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { TabletsRoutingModule } from "./tablets-routing.module";
import { TabletsComponent } from "./tablets.component";

@NgModule({
  declarations: [TabletsComponent],
  imports: [CommonModule, TabletsRoutingModule, MaterialModule],
})
export class TabletsModule {}
