import { Component, Input } from '@angular/core';

@Component({
  standalone: true, // Dies macht die Komponente standalone
  selector: 'app-accordion',
  template: `
    <div class="accordion" (click)="toggle()">
      <h3 class="accordion__title">
        {{ title }}
        <span class="accordion__icon">{{ isOpen ? '▼' : '▲' }}</span>
      </h3>
      <div *ngIf="isOpen" class="accordion__content">{{ content }}</div>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() title: string = 'Accordion Title';
  @Input() content: string = 'Accordion content goes here';
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
