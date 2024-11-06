import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-copilot',
  templateUrl: './dropdown-copilot.component.html',
  styleUrls: ['./dropdown-copilot.component.css']
})
export class DropdownCopilotComponent {
  @Input() isDropdownOpen = false; // Erlaubt, den Zustand von außen zu setzen
  @Input() options: string[] = [];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
