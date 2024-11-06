import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ButtonTextfieldComponent } from '../app/button-textfield/button-textfield.component';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/ButtonTextfield',
  component: ButtonTextfieldComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonTextfieldComponent, FormsModule], // Füge die Komponente in das imports-Array hinzu
    }),
  ],
} as Meta;

const Template: StoryFn<ButtonTextfieldComponent> = (args: ButtonTextfieldComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  inputValue: '',
};
