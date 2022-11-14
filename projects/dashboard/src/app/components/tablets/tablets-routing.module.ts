import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabletsComponent } from "./tablets.component";

const routes: Routes = [
  {
    path: "",
    component: TabletsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabletsRoutingModule {}
