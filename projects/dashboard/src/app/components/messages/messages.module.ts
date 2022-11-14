import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { MessagesRoutingModule } from "./messages-routing.module";
import { MessagesComponent } from "./messages.component";

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, MessagesRoutingModule, MaterialModule],
})
export class MessagesModule {}
