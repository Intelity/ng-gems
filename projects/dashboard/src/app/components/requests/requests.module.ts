import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { RequestsRoutingModule } from "./requests-routing.module";
import { RequestsComponent } from "./requests.component";

@NgModule({
  declarations: [RequestsComponent],
  imports: [CommonModule, RequestsRoutingModule, MaterialModule],
})
export class RequestsModule {}
