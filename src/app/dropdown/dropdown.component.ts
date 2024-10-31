import { Component, Input } from '@angular/core';

@Component({
  standalone: true, // Diese Zeile macht die Komponente standalone
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
  @Input() options: string[] = ['Option 1', 'Option 2', 'Option 3'];
}
