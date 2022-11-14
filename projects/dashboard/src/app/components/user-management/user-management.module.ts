import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { UserManagementRoutingModule } from "./user-management-routing.module";
import { UserManagementComponent } from "./user-management.component";

@NgModule({
  declarations: [UserManagementComponent],
  imports: [CommonModule, UserManagementRoutingModule, MaterialModule],
})
export class UserManagementModule {}
