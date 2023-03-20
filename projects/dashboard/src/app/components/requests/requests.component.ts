import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../material.module";
import {RequestsRoutingModule} from "./requests-routing.module";

@Component({
    selector: 'gems-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
