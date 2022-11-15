import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
