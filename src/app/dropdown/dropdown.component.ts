import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true, // Angabe, dass es eine Standalone-Komponente ist
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  imports: [CommonModule] // CommonModule hinzufügen
})
export class DropdownComponent { }
