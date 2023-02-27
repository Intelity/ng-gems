import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestsComponent} from "./requests.component";

const routes: Routes = [
    {
        path: '',
        component:RequestsComponent
    },
    {
        path: ':id',
        component:RequestsComponent
    },

];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), RequestsComponent],
    exports: [RouterModule]
})
export class RequestsRoutingModule {
}
