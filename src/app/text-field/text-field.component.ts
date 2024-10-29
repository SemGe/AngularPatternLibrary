import { Component } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent {
  value: string = '';
  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }
}
