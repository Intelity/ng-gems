# Types

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0. 

`GEMS` Types are references of database entities such as Affiliates, Requests, and even utility types such as reusable forms and base components.


## Code scaffolding

Run `ng generate component component-name --project types` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project types`.
> Note: Don't forget to add `--project types` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build types` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build types`, go to the dist folder `cd dist/types` and run `npm publish`.

## Running unit tests

Run `ng test types` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Extend Classes

`@gems/types/form` can be extended on to any class, primarily used for forms that need to be nested inside other forms. 
```
//Must be a const to pass into super() fn
const example_form = new FormGroup({control: new FormControl('')}
@Component({
  selector: 'app-nestable-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExampleFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ExampleFormComponent),
      multi: true
    }
  ]
})
export class ExampleFormComponent extends FormComponent {

constructor() {
//Pass in form instance and name of form
    super(example_form, 'example');
    
}
// You can now use this form as a form control inside another form.
```

`@gems/types/base` can be extended on to any class that has subscriptions to automatically unsubscribe.
```
export class ExampleComponent extends BaseComponent {
constructor() {
    super();
}
subscription = of(1);
ngOnInit() { 
    this.subscription.pipe(takeUntil(this.destroyed)).subscribe() }
}
// No Need to unsubscribe in ngOnDestroy
```
