import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TextFieldComponent } from '../app/text-field/text-field.component';

export default {
  title: 'Components/TextField',
  component: TextFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [TextFieldComponent],  // Hier importieren, statt deklarieren
    }),
  ],
} as Meta<TextFieldComponent>;

export const Default: StoryObj<TextFieldComponent> = {
  render: (args: TextFieldComponent) => ({
    props: args,
  }),
};
