import { moduleMetadata } from '@storybook/angular';
import { DropdownCopilotComponent } from '../app/dropdown-copilot/dropdown-copilot.component';

export default {
  title: 'DropdownCopilot',
  component: DropdownCopilotComponent,
  decorators: [
    moduleMetadata({
      declarations: [DropdownCopilotComponent],
    }),
  ],
};

export const Default = () => ({
  component: DropdownCopilotComponent,
  props: {
    options: ['Option A', 'Option B', 'Option C'], // Beispiel-Optionen für das Dropdown
  },
});