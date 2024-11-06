// dropdown-copilot.stories.ts
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
    options: ['Option A', 'Option B', 'Option C'], // Optionen für das Dropdown
  },
});

// Füge diese neue Story hinzu
export const OpenInDocs = () => ({
  component: DropdownCopilotComponent,
  props: {
    isDropdownOpen: true, // Setze den Dropdown-Zustand auf geöffnet
    options: ['Option A', 'Option B', 'Option C'], // Optionen für das Dropdown
  },
});
OpenInDocs.parameters = {
  docs: {
    source: {
      code: `<app-dropdown-copilot [isDropdownOpen]="true" [options]="['Option A', 'Option B', 'Option C']"></app-dropdown-copilot>`,
    },
  },
};
