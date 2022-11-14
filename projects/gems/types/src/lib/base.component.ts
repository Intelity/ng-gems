import {Subject} from "rxjs";
import {Injectable, OnDestroy} from "@angular/core";
@Injectable()
export class BaseComponent implements OnDestroy {
    destroyed = new Subject();
    constructor() {
    }
    ngOnDestroy() {
        this.destroyed.next(null);
        this.destroyed.complete();
    }
}
