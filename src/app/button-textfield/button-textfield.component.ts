import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-textfield',
  standalone: true, // Macht die Komponente eigenständig
  imports: [FormsModule], // Hier wird FormsModule direkt importiert
  templateUrl: './button-textfield.component.html',
  styleUrls: ['./button-textfield.component.css']
})
export class ButtonTextfieldComponent {
  inputValue: string = '';

  onButtonClick() {
    console.log('Button clicked with input:', this.inputValue);
    // Fügen Sie hier die gewünschte Funktionalität hinzu
  }
}
