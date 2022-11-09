import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gems-toggle',
  template: `
    <div class="toggle-wrapper">
      <div class="toggle transparent">
        <input id="{{name}}" class="psuedo-input" type="checkbox"
               ng-disabled="vm.isSaving"
               name="{{name}}">
        <label for="{{name}}" class="toggle-item"></label>
      </div>
    </div>
  `,
  styleUrls: [
      './toggle.component.scss'
  ]
})
export class ToggleComponent implements OnInit {
  @Input() name?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
