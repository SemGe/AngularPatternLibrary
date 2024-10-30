import { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from '../app/dropdown/dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Components/Dropdown',
  component: DropdownComponent,
  argTypes: {
    label: { control: 'text' },
    options: { control: { type: 'object' } } // 'object' akzeptiert Arrays und sollte kompatibler sein
  }
};

export default meta;

export const Default: StoryObj<DropdownComponent> = {
  args: {
    label: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};
