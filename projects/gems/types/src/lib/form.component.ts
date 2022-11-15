import {Injectable} from '@angular/core';
import {BaseComponent} from "@gems/types";
import {ControlValueAccessor, FormControl, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";

@Injectable()
export class FormComponent extends BaseComponent implements ControlValueAccessor {

    constructor(private Form: FormGroup, private name: string) {
        super();
        Form.valueChanges.pipe(takeUntil(this.destroyed)).subscribe((value) => {
            this.onChange(value);
            this.onTouched();
        });
    }
    get value(): any {
        return this.Form.value;
    }

    set value(value: any) {
        this.Form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    onChange: any = () => {
    };
    onTouched: any = () => {
    };

    registerOnChange(fn) {
        this.onChange = fn;
    }

    writeValue(value) {
        if (value) {
            this.value = value;
        }

        if (value === null) {
            this.Form.reset();
        }
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

// communicate the inner form validation to the parent form
    validate(_: FormControl) {
        const obj: any = {};
        obj[this.name] = {valid: this.Form.valid}
        return this.Form.valid ? null : obj;
    }

}
