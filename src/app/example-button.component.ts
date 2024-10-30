import { Component } from '@angular/core';

@Component({
  selector: 'app-example-button',
  template: `<button>{{ label }}</button>`,
  standalone: true,
})
export class ExampleButtonComponent {
  label = 'Klick mich';
}
