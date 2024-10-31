import { Meta, StoryFn } from '@storybook/angular';
import { DropdownComponent } from '../app/dropdown/dropdown.component';

export default {
  title: 'Components/Dropdown',
  component: DropdownComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  // Hier kannst du Standardwerte für das Dropdown hinzufügen
};
