import {Component, OnInit} from '@angular/core';

@Component({
    standalone: true,
    selector: 'gems-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    currentRequests=[];
    selectedRequest: any;
    constructor() {
    }

    ngOnInit(): void {
    }
    goRequestDetails(row){}
    advanceStatus(r, e, i, s){

    }

}
