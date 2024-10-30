import { Meta, StoryFn } from '@storybook/angular';
import { TextFieldComponent } from '../app/text-field/text-field.component';

export default {
  title: 'Components/TextField',
  component: TextFieldComponent,
  parameters: {
    docs: {
      description: {
        component: `### HTML Code
        \`\`\`html
        <div class="text-field">
          <label for="inputField">Textfeld:</label>
          <input id="inputField" type="text" placeholder="Geben Sie Text ein" />
          <p class="text-field__info-text">Hier können Sie Ihren Text eingeben.</p>
        </div>
        \`\`\`

        ### CSS Code
        \`\`\`css
        .text-field {
          display: flex;
          flex-direction: column;
        }
        \`\`\`
        `,
      },
    },
  },
} as Meta;

const Template: StoryFn = (args: any) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  value: 'Standardwert',
};
