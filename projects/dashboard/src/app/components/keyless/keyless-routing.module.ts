import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KeylessComponent } from "./keyless.component";

const routes: Routes = [
  {
    path: "",
    component: KeylessComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeylessRoutingModule {}
