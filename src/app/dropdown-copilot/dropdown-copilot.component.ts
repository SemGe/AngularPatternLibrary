import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-copilot',
  templateUrl: './dropdown-copilot.component.html',
  styleUrls: ['./dropdown-copilot.component.css']
})
export class DropdownCopilotComponent {
  isDropdownOpen = false;
  options: string[] = ['Option A', 'Option B', 'Option C']; // Beispiel-Optionen für das Dropdown

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}