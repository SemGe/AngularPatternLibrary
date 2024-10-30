import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="dropdown-container">
      <label>{{ label }}</label>
      <select>
        <option *ngFor="let option of options" [value]="option">{{ option }}</option>
      </select>
    </div>
  `,
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() label: string = 'Select an option';
  @Input() options: string[] = ['Option 1', 'Option 2', 'Option 3']; // Hier werden 3 Optionen hinzugefügt
}
