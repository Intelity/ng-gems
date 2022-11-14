import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../material.module";
import { ToolbarModule } from "../tool-bar/toolbar.module";
import { NavigationComponent } from "./navigation.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
  declarations: [NavigationComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule, RouterModule, ToolbarModule],
  exports: [NavigationComponent, SidenavComponent],
})
export class NavigationModule {}
