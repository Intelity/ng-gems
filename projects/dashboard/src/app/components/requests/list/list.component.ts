import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
    standalone: true,
    imports:[CommonModule],
    selector: 'gems-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    currentRequests:any = [{is_transitioning :false}];
    selectedRequest: any;
    row: any = {
        is_transitioning : false,
    };
    canUpdateRequests = true;
    constructor() {
    }

    ngOnInit(): void {
    }
    goRequestDetails(row:any){}
    advanceStatus(r?:any, e?:any, i?:number, s?:any){

    }

    toggleDropdown(evt:any, str:string) {}
}
