import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip">
      <span>{{ text }}</span>
      <span class="tooltip-text">This is a tooltip text</span>
    </div>
  `,
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input() text: string = 'Hover over me!';
}
